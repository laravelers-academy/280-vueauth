<template>
	
	<div id="app_wrapper">
		
		<header-component
			:is-auth="isAuth"></header-component>

    	<main-component></main-component>

    	<footer-component></footer-component>

		<auth-modal
			v-if="!isAuth"></auth-modal>

	</div>

</template>

<script>

	import HeaderComponent from './layouts/HeaderComponent'
	import MainComponent from './layouts/MainComponent'
	import FooterComponent from './layouts/FooterComponent'
	import AuthModal from './modals/AuthModal'

	export default {

		components: {
			HeaderComponent,
			MainComponent,
			FooterComponent,
			AuthModal,
		},

		beforeCreate () {

			store.dispatch('setAuthUser');

		},

		computed: {

			isAuth () {

				return (state.authUser) ? true : false;

			}

		}


	}

</script>