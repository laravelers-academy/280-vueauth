<template>
	
	<div id="auth_modal" uk-modal>

        <div class="uk-modal-dialog uk-modal-body">

            <ul 
                class="uk-tab uk-flex-center" 
                uk-grid 
                uk-switcher="animation: uk-animation-fade">
                <li><a href="#">Acceso</a></li>
                <li><a href="#">Registro</a></li>
                <li class="uk-hidden"><a>Recuperar contraseña</a></li>
            </ul>

            <ul class="uk-switcher uk-margin">
                
                <!-- Register Form -->
                <li>
                    <login-form
                        @submit="submitForm"></login-form>
                </li>
                
                <!-- Login Form -->
                <li>
                    <register-form
                        @submit="submitForm"></register-form>
                </li>

                <!-- Forgot password -->
                <li>
                    <reset-password-form
                        @submit="submitForm"></reset-password-form>
                </li>

            </ul>
            
        </div>

    </div>

</template>

<script>

    import LoginForm from '../forms/LoginForm'
    import RegisterForm from '../forms/RegisterForm'
    import ResetPasswordForm from '../forms/ResetPasswordForm'
	
	export default {

        components: {
            LoginForm,
            RegisterForm,
            ResetPasswordForm
        },

        methods: {

            submitForm (payload) {

                store.dispatch('setAuthUser');

                UIkit.notification({
                    message: payload.message,
                    status: 'success'
                });

                UIkit.modal('#auth_modal').hide();

                // ...

            }

        }

	}

</script>