import VueRouter from 'vue-router';

/**
 * Register your routes here.
 */

let routes = [
    {
        path: '/',
        component: require('./Pages/Dashboard.vue')
    },
];

export default new VueRouter({
    routes
});
