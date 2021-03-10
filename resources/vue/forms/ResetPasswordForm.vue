<template>
	
	<form>
        
        <h3 class="uk-card-title uk-text-center">Forgot your password?</h3>
        
        <p class="uk-text-center uk-width-medium@s uk-margin-auto">Enter your email address and we will send you a link to reset your password.</p>
        
        <text-input-component
            custom-class="jsValidator"
            type="email"
            name="email"
            placeholder="Escribe tu email"
            icon="mail"
            validators="required email"
            v-model="email"></text-input-component>
        
        <button-component
            custom-class="uk-button-primary uk-button-large uk-width-1-1"
            :disabled="disabled"
            value="Enviar email"></button-component>
        
        <div class="uk-text-small uk-text-center">
            <a href="#" uk-switcher-item="0">Back to login</a>
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
                disabled: false,
            }
        }

    }

</script>