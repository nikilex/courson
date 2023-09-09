<template>
  <div class="mb-3 form-check">
    <input
      class="form-check-input"
      :type="type"
      :name="name"
      :id="id"
      :value="value"
      @input="updateValue"
      :required="required"
      :checked="checked"
    />
    <label class="form-check-label" :for="labelFor" v-if="label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "RadiobuttonComponent",
  props: {
    type: {
      type: String,
      default: "radio",
    },
    checked: {
      type: Boolean
    },
    value: {},
    label: {
      type: String,
    },
    name: {
      type: String
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
