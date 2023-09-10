<template>
  <v-card>
    <v-card-text>
      <v-card-title> Товары </v-card-title>
      <v-simple-table class="mb-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th
                class="text-left"
                v-for="(head, index) in headers"
                :key="index"
              >
                {{ head.text }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in checkout.selectedProducts" :key="index">
              <td v-for="(head, indexHead) in headers" :key="indexHead">
                <template v-if="head.value === 'img'">
                  <v-img
                    max-height="35"
                    max-width="35"
                    contain
                    :src="item[head.value]"
                  ></v-img>
                </template>
                <template v-else>
                  {{ item[head.value] }}
                </template>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-card-title> Контактная информация </v-card-title>

      <v-simple-table>
        <tbody>
          <tr>
            <td>Адрес</td>
            <td>{{ checkoutForm.address }}</td>
          </tr>
          <tr>
            <td>ФИО</td>
            <td>{{ checkoutForm.fio }}</td>
          </tr>
          <tr>
            <td>Эл. Адрес</td>
            <td>{{ checkoutForm.email }}</td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>{{ checkoutForm.phone }}</td>
          </tr>
        </tbody>
      </v-simple-table>

      <v-card-title> <strong>Итого: </strong> {{ total }} </v-card-title>
    </v-card-text>
    <v-card-actions>
      <v-btn color="secondary" @click="changeStep(2)"> Назад </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="dialog = true"> Оформить </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title class="grey lighten-2">
          Ура, заказ оформлен!!!
        </v-card-title>

        <v-card-text>
          <v-row justify="center" align="center">
            <v-col>Благодарим, что выбрали наш магазин!</v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeModal"> Закрыть </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { FN_CHECKOUT_MODULE } from "../store/const";

export default {
  name: "TotalListComponent",
  data() {
    return {
      selected: [],
      dialog: false,
      headers: [
        { text: "id", value: "id" },
        { text: "Изображение", value: "img" },
        { text: "Имя", value: "name" },
        { text: "Цена", value: "price" },
        { text: "Количество", value: "count" },
        { text: "Описание", value: "description" },
      ],
      clearCheckout: {
        id: 0,
        name: null,
        price: null,
        products: [],
        selectedProducts: [],
      },
      clearForm: {
        address: "",
        fio: "",
        email: "",
        phone: "",
      },
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      checkout: FN_CHECKOUT_MODULE.GET_CHECKOUT,
      checkoutForm: FN_CHECKOUT_MODULE.GET_FORM,
    }),
    total() {
      return this.checkout.selectedProducts.reduce(
        (acc, current) => acc + current.price * current.count,
        0
      );
    },
  },
  methods: {
    ...mapActions({
      actionCheckout: FN_CHECKOUT_MODULE.ACTIONS_FETCH_CHECKOUT,
    }),
    ...mapMutations({
      setCheckout: FN_CHECKOUT_MODULE.SET_CHECKOUT,
      setForm: FN_CHECKOUT_MODULE.SET_FORM,
      setSelectedProducts: FN_CHECKOUT_MODULE.SET_SELECTED_PRODUCT,
    }),

    /**
     *  Закрывает модальное окно и сбрасывает данные
     * @returns {undefined}
     */
    async closeModal() {
      this.setCheckout(this.clearCheckout);
      this.setForm(this.clearForm);
      this.dialog = false;
      await this.actionCheckout();
      this.setSelectedProducts(this.checkout.products);
      this.$router.push({ name: "CheckoutPage", params: { step: 1 } });
    },

    /**
     * Меняет шаг
     * @returns {undefined}
     */
    changeStep() {
      this.$router.push({ name: "CheckoutPage", params: { step: 2 } });
    },
  },

  mounted() {},
};
</script>
