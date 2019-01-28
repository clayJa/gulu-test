import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);

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
    <g-button icon="setting" :icon-only="true"></g-button>
    <g-button icon="setting">按钮</g-button>
    <g-button icon="download" icon-position="right">按钮</g-button>
    <g-button-group>
      <g-button icon="left">前进</g-button><g-button icon="setting">设置</g-button><g-button icon="right" icon-position="right">后退</g-button>
    </g-button-group>
  </div>
  `
})