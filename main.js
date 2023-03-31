import App from './src/app.vue';
import Vue from 'vue';

const vm = new Vue({
    el: '#app',
    render: h => h(App)
  })