<template>
  <div>
    <button>
      <g-icon :name="icon"></g-icon>
      <slot></slot>
    </button>
  </div>
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
</style>