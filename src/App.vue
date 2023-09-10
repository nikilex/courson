<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout";
import CheckoutLayout from './layouts/CheckoutLayout';

export default {
  name: "App",
  components: {
    AppLayout,
    CheckoutLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "app") + "-layout";
    },
    env() {
      return process.env;
    },
  },
};
</script>

<style>

</style>
