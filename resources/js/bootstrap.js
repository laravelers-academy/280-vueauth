// LODASH
window._ = require('lodash');

// AXIOS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

// VUE
import { createApp } from 'vue'
import App from '../vue/App'
import router from '../vue/router'
import store from '../vue/vuex/store.js'

window.store = store;
window.state = store.state;

window.app = createApp(App).use(router).use(store);
window.vm = app.mount('#app');