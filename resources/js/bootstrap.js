// LODASH
window._ = require('lodash');

// AXIOS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// VUE
import { createApp } from 'vue'
import App from '../vue/App'
import router from '../vue/router'

window.app = createApp(App).use(router);

window.vm = app.mount('#app');