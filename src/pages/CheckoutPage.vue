<template>
  <div class="p-5">
    <h1>Страница заказа</h1>
    <v-row>
      <v-col cols="12">
        <StepperComponent />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StepperComponent from "@/components/StepperComponent";

export default {
  name: "CheckoutPage",
  components: {
    StepperComponent,
  },
  props: {
    pageId: {
      type: String,
    },
  },
  metaInfo: {
    title: "Пустая страница",
  },
};
</script>

<style lang="scss" scoped></style>
