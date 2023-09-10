import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ru from 'vuetify/es5/locale/ru'

Vue.use(Vuetify, {});

export default new Vuetify({
    lang: {
        locales: {ru},
        current: 'ru',
    },
    theme: {
        // dark: true,
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',

                'grey_lighten-3': '#eee',
            },
            dark: {
                'grey_lighten-3': '#363636',
            },
        },
    }
});
