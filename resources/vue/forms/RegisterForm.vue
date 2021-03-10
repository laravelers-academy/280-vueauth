<template>
	
	<form>

        <h3 class="uk-card-title uk-text-center">Sign up today. It's free!</h3>

        <text-input-component
            custom-class="jsValidator"
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            icon="user"
            validators="required lenght"
            min_length="5"
            max_length="100"
            v-model="name"></text-input-component>

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
            validators="required lenght"
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

        <checkbox-input-component
            custom-class="jsValidator"
            name="terms"
            text="Estoy de acuerdo con los Términos y Condiciones"
            validators="checked"
            v-model="terms"></checkbox-input-component>
        
        <button-component
            custom-class="uk-button-primary uk-button-large uk-width-1-1"
            :disabled="disabled"
            value="Registrarme"></button-component>
        
        <div class="uk-text-small uk-text-center">
            Already have an account? <a href="#" uk-switcher-item="0">Log in</a>
        </div>
    </form>

</template>

<script>
	
    import TextInputComponent from '../components/forms/TextInputComponent' 
    import CheckboxInputComponent from '../components/forms/CheckboxInputComponent'  
    import ButtonComponent from '../components/ButtonComponent'

	export default {
		
        components: {
            TextInputComponent,
            CheckboxInputComponent,
            ButtonComponent
        },

        data() {
            return {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                terms: false,
                disabled: false,
            }
        }

	}

</script>