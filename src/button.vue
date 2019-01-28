<template>
  <button :class="[{ iconOnly: iconOnly }, 'g-button']" @click="$emit('click')">
    <g-icon :name="icon" v-if="icon" :class="[iconPosition]"></g-icon>
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
      icon: '',
      iconOnly: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return value === 'left' || value === 'right'
        }
      }
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
    &.iconOnly {
      border-radius: 50%;
      padding: .3em;
    }
    &.iconOnly {
      border-radius: 50%;
      padding: .64em;
      & .g-icon {
        margin: 0;
      }
    }
    & .g-icon {
      margin-right: 0.4em;
    }
    & .g-icon.right {
      margin-left: 0.4em;
      order: 2;
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