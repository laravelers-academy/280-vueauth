<template>
	
	<form id="login_form" @submit.prevent="onSubmit">

        <h3 class="uk-card-title uk-text-center">Welcome back!</h3>

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
            validators="required"
            v-model="password"></text-input-component>
        
        <div class="uk-margin uk-text-right@s uk-text-center uk-text-small">
            <a href="#" uk-switcher-item="2">Forgot Password?</a>
        </div>
        
        <button-component
            custom-class="uk-button-primary uk-button-large uk-width-1-1"
            :disabled="disabled"
            value="Entrar"></button-component>
        
        <div class="uk-text-small uk-text-center">
            Not registered? <a href="#" uk-switcher-item="1">Create an account</a>
        </div>
        
    </form>

</template>

<script>

    import TextInputComponent from '../components/forms/TextInputComponent'
    import ButtonComponent from '../components/ButtonComponent'
	
	export default {

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
                email: "",
                password: "",
                disabled: false,
                loginFormValidator: undefined
            }
        },

        mounted() {

            this.loginFormValidator = new JSValidator('login_form').init();

        },

        methods: {

            onSubmit() {

                if(this.loginFormValidator.status) {

                    this.disabled = true;

                    axios.post('/login', {
                        email: this.email,
                        password: this.password
                    }).then( res => {

                        console.log(res);

                        this.$emit('submit', {
                            message: 'Inicio de sesión exitoso',
                            res: res
                        })

                    }).catch( error => {

                        console.log(error);
                        
                        this.disabled = false;

                        UIkit.notification({
                            message: 'No hemos podido validar tus credenciales',
                            status: 'danger'
                        });

                    });

                } else {

                    this.disabled = false;

                    UIkit.notification({
                        message: 'Error de validación',
                        status: 'danger'
                    });

                }

            }

        }

	}

</script>