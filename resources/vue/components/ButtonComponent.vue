<template>
	
	<div class="uk-margin">

        <button 
            class="uk-button"
            :class="customClass"
            :disabled="disabled">

            {{ value }}
            
        </button>

    </div>

</template>

<script>
	
	export default {

		props: {
			customClass: {
				type: String,
				required: false,
				default: ""
			},
			disabled: {
				type: Boolean,
				required: false,
				default: false,
			},
			value: {
				type: String,
				required: true,
				default: "Enviar"
			}
		}

	}

</script>