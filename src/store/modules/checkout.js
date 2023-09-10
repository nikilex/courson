import {
    CHECKOUT_MODULE
} from "../const/index";
import checkoutMock from "../mock/checkoutMock";
const { cloneDeep } = require("lodash");

export default {
    namespaced: true,
    state: {
        checkout: {
            id: 0,
            name: null,
            price: null,
            products: [],
            selectedProducts: [], 
        },
        form: {
            address: '',
            fio: '',
            email: '',
            phone: ''
        }
    },
    mutations: {
        [CHECKOUT_MODULE.SET_CHECKOUT](state, payload) {
            state.checkout = payload
        },
        [CHECKOUT_MODULE.SET_FORM](state, payload) {
            state.form = payload
        },
        [CHECKOUT_MODULE.SET_FORM_FIELD](state, {field, val}) {
            state.form[field] = val
        },
        [CHECKOUT_MODULE.SET_SELECTED_PRODUCT](state, payload) {
            state.checkout.selectedProducts = payload
        },
        [CHECKOUT_MODULE.SET_COUNT_OF_PRODUCT](state, {id, count}) {
            let findedProduct = state.checkout.products.find((item) => item.id === id);
            findedProduct.count = count
        },
    },
    actions: {
        async [CHECKOUT_MODULE.ACTIONS_FETCH_CHECKOUT]({
            commit
        }) {
            commit(CHECKOUT_MODULE.SET_CHECKOUT, cloneDeep(checkoutMock))
        },
    },
    getters: {
        [CHECKOUT_MODULE.GET_CHECKOUT](state) {
            return state.checkout
        },
        [CHECKOUT_MODULE.GET_FORM](state) {
            return state.form
        },
    }
}