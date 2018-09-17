'use strict';

var router = new VueRouter({
	routes: [{
		path: '/',
		component: HomeComponent
	}, {
		path: '/searchgif',
		component: SearchGifComponent
	}, {
		path: '/votegif',
		component: VoteGifComponent
	}, {
		path: '/winnergif',
		component: WinnerComponent
	}]
});

var app = new Vue({
	el: '#router-app',
	router: router,
	data: {
		username: "",
		status: null
	},

	//sets timer of status 
	created: function created(status) {
		this.getStatus();
		setInterval(this.getStatus, 5000);
	},

	// mounted: function() {
	//   console.log("this happens once, when the app gets mounted (elements go into DOM)")
	// },

	methods: {
		loggedIn: function loggedIn(username) {
			console.log("heard loggedin event from a child component, and it carried this data: ", username);
			this.username = username;
		},

		getStatus: function getStatus(status) {
			var _this = this;

			// console.log(this)
			axios.get('http://circuslabs.net:6432/status').then(function (response) {
				// needs to be an arrow function, so that *this* is still the Vue instance
				_this.status = response.data;
			});
		},

		selectedGif: function selectedGif(giphyURL) {
			var _this2 = this;

			console.log("user selected gif");
			axios.post('http://circuslabs.net:6432/submission', { giphyURL: giphyURL, username: this.username }).then(function (response) {
				console.log('response');
				_this2.$router.push('/votegif');
			}).catch(function (error) {
				console.log('error');
			});
		}
	}
});

// get API_URL + 'status'

// gif API:
// B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM
//# sourceMappingURL=app.js.map
