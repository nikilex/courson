import Vue from 'vue';
import Vuex from 'vuex';

import checkout from "./modules/checkout";

import {
    CHECKOUT_MODULE,
} from "./const/";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        [CHECKOUT_MODULE.NAME]: checkout,
    },
});
