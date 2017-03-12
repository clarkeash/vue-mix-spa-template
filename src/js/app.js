/**
 * First we will load all of this project's JavaScript
 * dependencies which includes Vue and other libraries.
 */

import './bootstrap';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. And load any components.
 */

import './components';

import router from './routes';

const app = new Vue({
    el: '#app',
    router
});
