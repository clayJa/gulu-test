<template>
  <button :class="[{ iconOnly: iconOnly }, [iconPosition], 'g-button']" @click="$emit('click')">
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon class="loading" v-if="loading" name="loading"></g-icon>
    <div class="gulu-button-content">
      <slot/>
    </div>
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
      },
      loading: {
        type: Boolean,
        default: false
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
  @keyframes loading {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
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
    vertical-align: middle;
    order: 0;
    > .gulu-button-content {
      order: 2;
    }
    > .icon {
      order: 1;
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
      &.loading {
        animation: loading 3s infinite linear; 
      }
    }
    &.right .icon {
      order: 2;
      &.g-icon {
        margin-left: 0.4em;
      }
    }
    &.right > .gulu-button-content{
      order: 1;
    }
    /* &.left .g-icon {
      margin-left: 0.4em;
      order: 2;
    } */
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