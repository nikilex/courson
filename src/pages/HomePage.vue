<template>
  <div>
    <h1 class="text-center">Главная</h1>
    <b-row class="justify-content-center">
      <b-col cols="6">
        <FormComponent :onSubmit="onSubmit" />
      </b-col>
    </b-row>

    <b-modal id="modal-1" title="Ура!!!">
      <p class="my-4">Данные успешно отправлены!</p>
    </b-modal>
  </div>
</template>

<script>
import FormComponent from "../components/form/FormComponent";

export default {
  name: "HomePage",
  metaInfo: {
    title: "Главная",
  },
  components: {
    FormComponent,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    /**
     * Действие после отправки формы
     * @returns {undefined}
     */
    onSubmit() {
      this.$bvModal.show("modal-1");
    },
  },
  mounted() {},
};
</script>
