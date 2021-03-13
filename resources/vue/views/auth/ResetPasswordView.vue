<template>
	<div class="uk-section uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="expand: true">
		<div class="uk-width-1-1">
			<div class="uk-container">
				<div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
					<div class="uk-width-1-1@m">
						<div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">

							<reset-account-form
								:email="email"
								:token="token"
								@submit="submitForm"></reset-account-form>

						</div>

					</div>

				</div>

			</div>

		</div>

	</div>

</template>
	

<script>
	
	import ResetAccountForm from '../../forms/ResetAccountForm'

	export default {

		components: {
			ResetAccountForm
		},

		computed: {

			email() {

				return this.$route.query.email;

			},

			token() {

				return this.$route.params.token;

			}

		},

		methods: {

			submitForm (payload) {

				UIkit.notification({
					message: payload.message,
					status: 'success'
				});

				store.dispatch('setAuthUser');

			}

		}

	}

</script>