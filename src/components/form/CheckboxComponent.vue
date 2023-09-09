<template>
  <div class="mb-3 form-check">
    <input
      :type="type"
      class="form-check-input"
      :id="id"
      :value="value"
      :required="required"
      @change="updateValue"
      :checked="checked"
    />
    <label class="form-check-label" :for="labelFor" v-if="label">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  props: {
    type: {
      type: String,
      default: "checkbox",
    },
    value: {
    },
    checked: {
      type: Boolean
    },
    label: {
      type: String,
    },
    ["label-for"]: {
      type: String,
    },
    id: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "changeValue",
  },
  methods: {
    updateValue(event) {
      this.$emit("changeValue", event.target.value);
    },
  },
};
</script>
