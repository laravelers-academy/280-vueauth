<template>
	
	<header>
		<div class="uk-section uk-padding-remove uk-section-muted">
            
            <div class="uk-container">
                
                <nav class="uk-navbar-container" uk-navbar>

                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="">VueAuth</a></li>
                        </ul>
                    </div>

                    <div class="uk-navbar-right">
                        
                        <ul class="uk-navbar-nav">
                            
                            <li 
                                v-if="!isAuth"
                                class="uk-parent">
                                <a href="#" uk-toggle="target: #auth_modal">Acceso</a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>

        </div>
    </header>

</template>

<script>
	
	export default {
		
        props: {
            isAuth: {
                type: Boolean,
                required: true
            }
        }
        
	}

</script>