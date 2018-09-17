let WinnerComponent =Vue.component('winnergif', {
    data: function () {
        return {
        }
    },
    watch: {
		status: function() {
			if (this.status.phase != 'post-game'){
				this.$router.push('/winnergif');
			}
		}
	},
	props: ['status'],
    
    template: `
    <div class="winner">
        <div v-if="status && status.submissions && status.submissions.length">
            <h1> Congrats, {{ status.submissions[0].username }} !!! </h1> 
            <p> You won!!! </p>
            <p> <img :src="status.submissions[0].giphyURL"> </p>
        <router-link to="/" class="nav"> play again </router-link>
        </div>
    </div>
    `
  //has to be wrapped in single element, even if its just a div
})