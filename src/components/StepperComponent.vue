<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" @click="changeStep(1)" step="1">
        Шаг 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" @click="changeStep(2)" step="2">
        Шаг 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" @click="changeStep(3)"> Шаг 3 </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <ProductsTableComponent />
      </v-stepper-content>

      <v-stepper-content step="2">
        <CheckoutFormComponent />
      </v-stepper-content>

      <v-stepper-content step="3">
        <TotalListComponent />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CheckoutFormComponent from "./CheckoutFormComponent";
import ProductsTableComponent from "./ProductsTableComponent";
import TotalListComponent from "./TotalListComponent";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { FN_CHECKOUT_MODULE } from "../store/const";

export default {
  name: "StepperComponent",
  components: {
    ProductsTableComponent,
    CheckoutFormComponent,
    TotalListComponent,
  },
  data() {
    return {
      e1: 1,
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      checkout: FN_CHECKOUT_MODULE.GET_CHECKOUT,
    }),
  },
  methods: {
    ...mapActions({
      actionCheckout: FN_CHECKOUT_MODULE.ACTIONS_FETCH_CHECKOUT,
    }),
    ...mapMutations({
      setSelectedProducts: FN_CHECKOUT_MODULE.SET_SELECTED_PRODUCT,
    }),

    /**
     * Меняет шаг
     * @returns {undefined}
     */
    changeStep(step) {
      this.$router.push({ name: "CheckoutPage", params: { step: step } });
    },

    /**
     * Первичная инициализация
     * @returns {undefined}
     */
    init() {
      this.setSelectedProducts(this.checkout.products);
    },
  },
  watch: {
    "$route.params.step": {
      handler: async function () {
        this.e1 = this.$route.params.step;
      },
      deep: true,
      immediate: true,
    },
  },

  async mounted() {
    await this.actionCheckout();
    this.init();
  },
};
</script>
