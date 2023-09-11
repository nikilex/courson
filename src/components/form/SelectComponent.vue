<template>
  <div class="dropdown mb-3" v-if="options">
    <label :for="labelFor" class="form-label" v-if="label">{{ label }}</label>
    <!-- Dropdown Input -->
    <input
      class="form-control"
      :name="name"
      @focus="showOptions()"
      @blur="exit()"
      @keyup="keyMonitor"
      :value="searchFilter"
      @input="updateValue"
      :disabled="disabled"
      :placeholder="placeholder"
    />

    <!-- Dropdown Menu -->
    <div class="dropdown-content" v-show="optionsShown">
      <template v-if="loading">
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </template>
      <template v-else>
        <template v-if="filteredOptions.length">
          <div
            class="dropdown-item"
            @mousedown="selectOption(option)"
            v-for="(option, index) in filteredOptions"
            :key="index"
          >
            {{ option[keyOfValue] || option.id || "-" }}
          </div>
        </template>
        <template v-else>
          <div class="dropdown-item">
            {{ emptyOptionsMessage }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    name: {
      type: String,
      required: false,
      default: "dropdown",
    },
    label: {
      type: String,
    },
    ["value-key"]: {
      type: String,
    },
    ["label-for"]: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    placeholder: {
      type: String,
      required: false,
      default: "Пожалуйста, выберите опцию",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxItem: {
      type: Number,
      required: false,
      default: 6,
    },
  },
  data() {
    return {
      selected: {},
      optionsShown: false,
      searchFilter: "",
      emptyOptionsMessage: "Данные отсутствуют",
    };
  },
  created() {
    this.$emit("selected", this.selected);
  },
  computed: {
    /**
     * Формирует ключ для объекта который
     * используется для ключа в объекте опции
     * @returns {string}
     */
    keyOfValue() {
      return this.valueKey || "name";
    },

    /**
     * Фильтрует опции
     * @returns {Object[]}
     */
    filteredOptions() {
      const filtered = [];
      const regOption = new RegExp(this.searchFilter, "ig");
      for (const option of this.options) {
        if (
          this.searchFilter.length < 1 ||
          option[this.keyOfValue].match(regOption)
        ) {
          if (filtered.length < this.maxItem) filtered.push(option);
        }
      }
      return filtered;
    },
  },
  model: {
    prop: "searchFilter",
    event: "changeValue",
  },
  methods: {
    /**
     * Обновляет данные модели
     */
    updateValue(event) {
      this.searchFilter = event.target.value;
      this.$emit("search", event.target.value);
    },

    /**
     * Выбирает опцию
     * @param {Object}
     * @returns {undefined}
     */
    selectOption(option) {
      this.selected = option;
      this.optionsShown = false;
      this.searchFilter = this.selected[this.keyOfValue];
      this.$emit("selected", this.selected);
      this.$emit("changeValue", this.selected[this.keyOfValue]);
    },

    /**
     * Показывает список опций
     * @returns {undefined}
     */
    showOptions() {
      if (!this.disabled) {
        this.searchFilter = "";
        this.optionsShown = true;
      }
    },

    /**
     * Установка значения по отработке события blur
     * @returns {undefined}
     */
    exit() {
      if (!this.selected.id) {
        this.selected = {};
        this.searchFilter = "";
      } else {
        this.searchFilter = this.selected[this.keyOfValue];
      }
      this.$emit("selected", this.selected);
      this.optionsShown = false;
    },

    /**
     * Выбирает опцию по нажатию Enter
     * @returns {undefined}
     */
    keyMonitor: function (event) {
      if (event.key === "Enter" && this.filteredOptions[0])
        this.selectOption(this.filteredOptions[0]);
    },
  },
  watch: {
    searchFilter() {
      if (this.filteredOptions.length === 0) {
        this.selected = {};
      } else {
        this.selected = this.filteredOptions[0];
      }
      this.$emit("filter", this.searchFilter);
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: block;
  margin: auto;
}

.dropdown .dropdown:hover .dropdowncontent {
  display: block;
}

.dropdown .dropdown-content {
  position: absolute;
  width: 100%;
  background-color: #fff;
  min-width: 248px;
  max-height: 248px;
  border: 1px solid #e7ecf5;
  box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
  overflow: auto;
  z-index: 1;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.dropdown .dropdown-content .dropdown-item {
  color: black;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown .dropdown-content .dropdown-item:hover {
  background-color: #e7ecf5;
}

.dropdown .dropdown-input {
  background: #fff;
  cursor: pointer;
  border: 1px solid #e7ecf5;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 0.8em;
  padding: 6px;
  min-width: 250px;
  max-width: 250px;
}

.dropdown .dropdown-input:hover {
  background: #f8f8fa;
}
</style>
