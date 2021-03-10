<template>
	
	<div class="uk-margin">

        <div class="uk-inline uk-width-1-1">

            <span 
            	v-if="hasIcon"
            	class="uk-form-icon" 
            	:uk-icon="iconAttr"></span>

            <input 
            	class="uk-input uk-form-large" 
            	:class="customClass"
            	:type="type" 
            	:name="name"
            	:placeholder="placeholder"
            	:data-validators="validators"
            	:data-min_length="min_length"
            	:data-max_length="max_length"
            	v-model="value">

        </div>

    </div>

</template>

<script>
	
	export default {

		props: {
			icon: {
				type: String,
				required: false,
				default: ""
			},
			customClass: {
				type: String,
				required: false,
			},
			type: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
				required: false
			},
			validators: {
				type: String,
				required: false,
			},
			min_length: {
				type: String,
				required: false,
			},
			max_length: {
				type: String,
				required: false,
			},
			modelValue: {
				type: String,
				default: ""
			}
		},

		emits: ['update:modelValue'],

		computed: {

			value: {

				get() {
					return this.modelValue;
				},

				set(value){
					this.$emit('update:modelValue', value);
				}

			},

			hasIcon() {

				return (this.icon == "") ? false : true;

			},

			iconAttr() {

				return (this.icon == "") ? "" : `icon: ${this.icon}`;

			}

		}

	}

</script>