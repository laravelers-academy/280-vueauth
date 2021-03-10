<template>
	
	<div class="uk-margin">
        <label>
            <input 
                class="uk-checkbox" 
                :class="customClass"
                type="checkbox"
                :name="name"
                :data-validators="validators"
                v-model="value">
                {{ text }}
        </label>
    </div>

</template>

<script>
	
	export default {

		props: {
			customClass: {
				type: String,
				required: false
			},
			name: {
				type: String,
				required: true,
			},
			validators: {
				type: String,
				required: false,
			},
			text: {
				type: String,
				required: false,
				default: ""
			},
			modelValue: {
				default: ""
			}
		},

		computed: {

			value: {

				get() {
					return this.value;
				},

				set(value) {
					this.$emit('update:modelValue', value)
				}

			}

		}

	}

</script>