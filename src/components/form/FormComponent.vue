<template>
  <form v-if="show">
    <InputTextField
      label="Эл. почта:"
      label-for="input-1"
      type="email"
      id="input-1"
      placeholder="Введите эл. адрес"
      v-model="form.email"
      description="Мы никогда не передадим ваш адрес электронной почты кому-либо еще."
    />

    <InputTextField
      label="Ваше имя:"
      label-for="input-2"
      type="text"
      id="input-2"
      placeholder="Введите имя"
      v-model="form.name"
    />

    <SelectComponent
      label="Выберите тип (статические данные)"
      :options="options"
      v-model="selectedValue"
    />

    <SelectComponent
      label="Выберите тип (динамические данные)"
      :options="optionsFetch"
      v-model="selectedValueFetch"
      value-key="firstName"
      :loading="loading"
      @search="search"
    />

    <CheckboxComponent
      label="Я принимаю условия соглашения."
      label-for="checkbox-1"
      id="checkbox-1"
      v-model="form.checkOne"
      :checked="form.checkOne"
    />

    <CheckboxComponent
      label="Я соглашаюсь получать рассылку."
      label-for="checkbox-2"
      id="checkbox-2"
      v-model="form.checkTwo"
    />

    <RadiobuttonComponent
      label="Radio 1"
      label-for="radio-1"
      id="radio-1"
      name="radio"
      v-model="form.radio"
      checked
    />

    <RadiobuttonComponent
      label="Radio 2"
      label-for="radio-2"
      id="radio-2"
      name="radio"
      v-model="form.radio"
    />

    <RadiobuttonComponent
      label="Radio 3"
      label-for="radio-3"
      id="radio-3"
      name="radio"
      v-model="form.radio"
    />

    <button type="button" class="btn btn-primary me-2" @click="onSubmit">
      Отправить
    </button>
    <button type="button" class="btn btn-danger" @click="onReset">
      Сбросить
    </button>
  </form>
</template>

<script>
import CheckboxComponent from "../form/CheckboxComponent";
import RadiobuttonComponent from "../form/RadiobuttonComponent";
import SelectComponent from "../form/SelectComponent";
import InputTextField from "./InputTextField";
import { debounce } from "lodash";

export default {
  name: "FormComponent",
  components: {
    InputTextField,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
  },
  props: {
    onSubmit: {
      type: Function,
    },
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        radio: null,
        checkOne: true,
        checkTwo: false,
      },
      loading: false,
      optionsFetch: [],
      searchValue: "",
      selectedValue: "",
      selectedValueFetch: "",
      show: true,
      options: [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    /**
     * Связывает значение из дочернего компонента
     * @param {string}
     */
    search(val) {
      this.searchValue = val;
    },

    /**
     * Очищает форму
     * @returns {undefined}
     */
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.radio = null;
      this.form.checkOne = false;
      this.form.checkTwo = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {},
  watch: {
    searchValue: {
      handler: debounce(async function () {
        this.loading = true;
        await fetch(
          `https://dummyjson.com/users/search?limit=5&q=${this.searchValue}`
        )
          .then((res) => res.json())
          .then((json) => {
            this.optionsFetch = json.users;
          })
          .finally(() => (this.loading = false));
      }, 200),
      deep: true,
      immediate: true,
    },
  },
};
</script>
