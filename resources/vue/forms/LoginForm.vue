<template>
	
	<form>

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

        data() {
            return {
                email: "",
                password: "",
                disabled: false,
            }
        }

	}

</script>