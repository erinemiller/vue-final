const router = new VueRouter({
	routes: [{
			path: '/',
			component: HomeComponent
		},
		{
			path: '/searchgif',
			component: SearchGifComponent
		},
		{
			path: '/votegif',
			component: VoteGifComponent.js
		},
		{
			path: '/winnergif',
			component: WinnerComponent
		}
	]
})

var app = new Vue({
	el: '#router-app',
	router: router,
	data: {
		username: "",
		status: null,
	},

	//sets timer of status 
	created: function (status) {
		this.getStatus();
		setInterval(this.getStatus, 5000);
	},

	// mounted: function() {
	//   console.log("this happens once, when the app gets mounted (elements go into DOM)")
	// },

	methods: {
		loggedIn: function (username) {
			console.log("heard loggedin event from a child component, and it carried this data: ", username)
			this.username = username;
		},


		getStatus: function (status) {
			// console.log(this)
			axios
				.get('http://circuslabs.net:6432/status')
				.then((response) => { // needs to be an arrow function, so that *this* is still the Vue instance
					this.status = response.data;
				})					
		},

		selectedGif: function(giphyURL){
			console.log("user selected gif")

			axios
			.post('http://circuslabs.net:6432/submission', {giphyURL: giphyURL, username: this.username})
			.then((response) => {
				console.log('response');
			})
			.catch(function (error) {
				console.log('error');
			})
		}
	}
})



// get API_URL + 'status'

// gif API:
// B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM