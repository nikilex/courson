<template>
  <v-card>
    <v-card-text>
      <v-form v-model="valid">
        <v-container>
          <v-row justify="center">
            <v-col cols="6">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="address"
                    label="Адрес"
                    outlined
                    dense
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="fio"
                    label="ФИО"
                    outlined
                    dense
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="phone"
                    label="Телефон"
                    outlined
                    dense
                    hide-details
                    v-mask="`+7 (###) ###-##-##`"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="Эл. почта"
                    outlined
                    dense
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="secondary" @click="changeStep(1)"> Назад </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="changeStep(3)"> Вперёд </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { FN_CHECKOUT_MODULE } from "../store/const";

export default {
  data: () => ({
    valid: false,
  }),
  computed: {
    ...mapGetters({
      checkout: FN_CHECKOUT_MODULE.GET_CHECKOUT,
      checkoutForm: FN_CHECKOUT_MODULE.GET_FORM,
    }),
    address: {
      set: function (val) {
        this.setFormField({field: "address", val: val});
      },
      get: function () {
        return this.checkoutForm.address;
      },
    },
    fio: {
      set: function (val) {
        this.setFormField({field: "fio", val: val});
      },
      get: function () {
        return this.checkoutForm.fio;
      },
    },
    email: {
      set: function (val) {
        this.setFormField({field: "email", val: val});
      },
      get: function () {
        return this.checkoutForm.email;
      },
    },
    phone: {
      set: function (val) {
        this.setFormField({field: "phone", val: val});
      },
      get: function () {
        return this.checkoutForm.phone;
      },
    },
  },
  methods: {
    ...mapMutations({
      setFormField: FN_CHECKOUT_MODULE.SET_FORM_FIELD,
    }),
    changeStep(step) {
      this.$router.push({ name: "CheckoutPage", params: { step: step } });
    },
  },
};
</script>
