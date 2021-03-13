<template>
	
	<form id="reset_account_form" @submit.prevent="onSubmit">

		<h3 class="uk-card-title uk-text-center">Restablecer cuenta</h3>

		<text-input-component
            custom-class="jsValidator"
            type="email"
            name="email"
            placeholder="Escribe tu email"
            icon="mail"
            validators="required email"
            v-model="email"></text-input-component>

        <text-input-component
            custom-class="jsValidator"
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="lock"
            validators="required length"
            min_length="8"
            v-model="password"></text-input-component>

        <text-input-component
            custom-class="jsValidator"
            type="password"
            name="password_confirmation"
            placeholder="Confirmar contraseña"
            icon="lock"
            validators="required password_confirmation"
            v-model="password_confirmation"></text-input-component>

		<button-component
            custom-class="uk-button-primary uk-button-large uk-width-1-1"
            :disabled="disabled"
            value="Restablecer contraseña"></button-component>
		
	</form>

</template>

<script>

	import TextInputComponent from '../components/forms/TextInputComponent'
	import ButtonComponent from '../components/ButtonComponent'
	
	export default {

		props: {
			token: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true
			}
		},

		components: {
			TextInputComponent,
			ButtonComponent
		},

		emits: {

			submit: (payload) => {
				return payload;
			}

		},

		data() {

			return {
				password: "",
				password_confirmation: "",
				disabled: false,
				resetAccountFormValidator: undefined
			}

		},

		mounted() {

			this.resetAccountFormValidator = new JSValidator('reset_account_form').init();

		},

		methods: {

			onSubmit() {

				if(this.resetAccountFormValidator.status) {

					this.disabled = true;

					axios.post('/reset-password', {
						token: this.token,
						email: this.email,
						password: this.password,
						password_confirmation: this.password_confirmation
					}).then( res => {

						this.$emit('submit', {
							message: 'Se ha restablecido la contraseña',
							res: res
						});

					}).catch( error => {

						console.log(error);

						UIkit.notification({
							message: 'Ha ocurrido un error inesperado.',
							status: 'danger'
						});

					})

				} else {

					UIkit.notification({
						message: 'Error de validación',
						status: 'danger'
					});

				}

			}

		}

	}

</script>