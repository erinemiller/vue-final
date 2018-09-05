'use strict';

var router = new VueRouter({
  routes: [{ path: '/', component: HomeComponent }, { path: '/searchgif', component: SearchGifComponent }, { path: '/submitgif', component: SubmitGifComponent }, { path: '/winnergif', component: WinnerComponent }]
});

var API_URL = 'http://circuslabs.net:6432/';

var app = new Vue({
  el: '#router-app',
  router: router,
  data: {
    username: "",
    status: null
    // message: 'HIIII!'
  },
  methods: {
    loggedIn: function loggedIn(username) {
      console.log("heard loggedin event from a child component, and it carried this data: ", username);
      this.username = username;
    },
    getStatus: function getStatus(status) {
      axios.get(API_URL).then(function (response) {
        console.log(response);
        // this.info = response;
      });
    }
  }
});

// get API_URL + 'status'


// gif API:
// B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM
//# sourceMappingURL=app.js.map
