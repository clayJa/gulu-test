import Vue from 'vue'
import Button from './button'

Vue.component('g-button',Button);

new Vue({
  el: '#app',
  data: {

  },
  template: 
  `
  <div>
    <g-button icon="setting">按钮</g-button>
    <g-button icon="setting">按钮</g-button>
  </div>
  `
})