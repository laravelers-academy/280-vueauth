// LODASH
window._ = require('lodash');

// AXIOS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// VUE
import { createApp } from 'vue'
import App from '../vue/App'

window.app = createApp(App);
window.vm = app.mount('#app');