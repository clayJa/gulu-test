import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
import Input from './input'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);

new Vue({
  el: '#app',
  data: {
    value: 'asdfsdafsd',
  },
  methods: {
    change(e) {
      console.log(e);
    }
  },
  template: `
  <div>
    <g-input :value="value" @change="change"></g-input>
    <g-input :value="value" :disabled="true"></g-input>
    <g-input :value="value" :readonly="true"></g-input>
    <g-input :value="value" :error="'用户'" ></g-input>
  </div>
  `
})