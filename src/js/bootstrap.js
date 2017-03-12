import VueRouter from 'vue-router';

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
window.Vue.use(VueRouter);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to your back-end. This library can automatically handle sending the
 * CSRF token as a header. Just uncomment the line below.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    // 'X-CSRF-TOKEN': window.App.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

Vue.prototype.$http = window.axios;
