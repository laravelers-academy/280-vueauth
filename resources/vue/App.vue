<template>
	
	<div id="app_wrapper">
		
		<header-component></header-component>

    	<main-component></main-component>

    	<footer-component></footer-component>

		<auth-modal></auth-modal>

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
		}

	}

</script>