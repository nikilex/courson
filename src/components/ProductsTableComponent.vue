<template>
  <v-card>
    <v-card-text>
      <v-data-table
        v-model="selectedProducts"
        :headers="headers"
        :items="checkout.products"
        :items-per-page="5"
        show-select
        class="elevation-1"
      >
        <template v-slot:[`item.count`]="{ item }">
          <v-btn icon color="red" @click="changeCount(item, 0)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          {{ item.count }}
          <v-btn icon color="green" @click="changeCount(item, 1)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:[`item.img`]="{ item }">
          <v-img max-height="35" max-width="35" contain :src="item.img"></v-img>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <strong>Итого:</strong> {{ total }}
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="changeStep()"> Вперёд </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { FN_CHECKOUT_MODULE } from "../store/const";

export default {
  name: "ProductsTableComponent",
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Изображение", value: "img", sortable: false },
        {
          text: "Имя",
          value: "name",
          sortable: false,
        },
        { text: "Цена", value: "price", sortable: false },
        { text: "Количество", value: "count", sortable: false },
        { text: "Описание", value: "description", sortable: false },
      ],
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      checkout: FN_CHECKOUT_MODULE.GET_CHECKOUT,
    }),
    selectedProducts: {
      set: function (val) {
        this.setSelectedProducts(val);
      },
      get: function () {
        if (!this.checkout.selectedProducts) return [];
        return this.checkout.selectedProducts;
      },
    },
    total() {
      return this.checkout.selectedProducts.reduce(
        (acc, current) => acc + current.price * current.count,
        0
      );
    },
  },
  methods: {
    ...mapMutations({
      setCountMutation: FN_CHECKOUT_MODULE.SET_COUNT_OF_PRODUCT,
      setSelectedProducts: FN_CHECKOUT_MODULE.SET_SELECTED_PRODUCT,
    }),

    /**
     * Меняет шаг
     * @returns {undefined}
     */
    changeStep() {
      this.$router.push({ name: "CheckoutPage", params: { step: 2 } });
    },

    /**
     * Меняет количество товара в заказе
     * @param {Object} item - Идентификатор товара
     * @param {number} type - 0 = отнять, 1 = прибавить
     * @returns {undefined}
     */
    changeCount(item, type) {
      let count = item.count;

      if (type) {
        count++;
      } else {
        if (count > 1) {
          count--;
        }
      }

      this.setCountMutation({
        id: item.id,
        count: count,
      });
    },
  },

  mounted() {},
};
</script>
