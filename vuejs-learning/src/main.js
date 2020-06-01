import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

//global register template
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas);

// export const bus = new Vue();

// Use vue-resource package
Vue.use(VueResource);

Vue.directive('rainbow', {
  bind(el, binding, vnode){
      el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode){
      if (binding.value == 'wide'){
          el.style.maxWidth = "1260px";
      } else if (binding.value = 'narrow'){
          el.style.maxWidth = "560px";
      }
      if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
      }
  }
});

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
