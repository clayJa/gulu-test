<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluButtonGroup'
  }
</script>
<style lang="scss" scope>
  .button-group {
    margin: 0;
    padding: 0;
    & .g-button {
      vertical-align: middle;
      margin: 0;
      border-radius: 0;
      border-left: none;
      &:last-child {
        border-radius: 0 .3em .3em 0;
      }
      &:first-child {
        border-radius: .3em 0 0 .3em;
        border-left: 1px solid var(--borderColor);
      }
      &:not(:first-child):hover {
        border-left: 1px solid var(--borderColorHover);
        z-index: 1;
        margin-left: -1px;
      }
    }
  }
</style>