<template>
  <button class="g-button">
    <g-icon :name="icon"></g-icon>
    <slot></slot>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'guluButton',
    components: {
      "g-icon": Icon
    },
    props: {
      icon: ''
    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .g-button {
    background: var(--buttonBg);
    color: var(--color);
    border: 1px solid var(--borderColor);
    border-radius: .3em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1.165em;
    & .g-icon {
      margin-right: 0.4em;
    }
    &:hover {
      border-color: var(--borderColorHover);
    }
    &:focus {
      outline: none;
    }
    &:active {
      background: var(--buttonActiveBg);
    }
  }
</style>