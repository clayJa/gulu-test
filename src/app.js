import Vue from 'vue'
import Button from './button'

Vue.component('g-button',Button);

new Vue({
  el: '#app',
  data: {

  },
  methods: {
    handleClick() {
      console.log('you have click');
    }
  },
  template: 
  `
  <div>
    <g-button icon="setting" @click="handleClick">按钮</g-button>
    <g-button icon="setting">按钮</g-button>
    <g-button icon="setting" icon-position="right">按钮</g-button>
  </div>
  `
})