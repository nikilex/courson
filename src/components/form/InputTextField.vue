<template>
  <div class="mb-3">
    <label :for="labelFor" class="form-label" v-if="label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      @input="updateValue"
    />
    <div class="form-text" v-if="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "InputTextField",
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
    },
    description: {
      type: String,
    },
    label: {
      type: String,
    },
    ["label-for"]: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    id: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false
    }
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
