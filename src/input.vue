<template>
	<div class="input-wrapper" :class="{error}"> 
		<input :type="type" :value="value" :disabled="disabled" :readonly="readonly" @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)"
		 @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)">
		<template v-if="error">
			<g-icon name="error" class="icon-error"></g-icon>
			<span class="errorMessage">{{error}}</span>
    </template>
	</div>
</template>
<script>
	import Icon from './icon.vue'
	export default {
		name: 'GuluInput',
		components: {
			'g-icon': Icon
		},
		props: {
			value: {
				type: [String, Number]
			},
			type: {
				type: String,
				default: 'text'
			},
      error: {
        type: String
      },
			disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
		}
	}
</script>
<style lang="scss" scoped>
	$height: 32px;
	$border-color: #999;
	$border-color-hover: #666;
	$border-radius: 4px;
	$font-size: 12px;
	$box-shadow-color: rgba(0, 0, 0, 0.5);
	$red: #F1453D;

	.input-wrapper {
		font-size: $font-size;
		display: inline-flex;
		align-items: center;
		> :not(:last-child) {margin-right: .5em; }
		> input {
			border: 1px solid $border-color;
			height: $height;
			padding: 0 8px;
			border-radius: $border-radius;

			&:focus {
				outline: none;
				box-shadow: inset 0 1px 3px 0 $box-shadow-color;
			}

			&:hover {
				border-color: $border-color-hover;
			}

			&:focus {
				box-shadow: inset 0 1px 3px $box-shadow-color;
				outline: none;
			}

			&[disabled]{
				border-color: #bbb;
				color: #bbb;
				&[readonly]{
				}

				&[readonly]{
					cursor: not-allowed;
				}
			}
		}

		&.error {
      > input { border-color: $red; }
    }
    .icon-error { fill: $red; }
    .errorMessage { color: $red; }
	}
</style>