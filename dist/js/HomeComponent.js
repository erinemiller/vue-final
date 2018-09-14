'use strict';

var HomeComponent = Vue.component('home', {
    data: function data() {
        return {
            username: ''
        };
    },

    watch: {
        username: function username(_username) {
            console.log('username changed!', _username);
            this.$emit('loggedin', _username);
        }
    },
    template: '<div>\n\n            <div class="title">GIPHYBATTLE</div>\n            <p>\n                Watch the game screen to see the subject,then choose a Giphy to match it in the funniest, sickest, awesomest, or silliest way possible.\n            </p>\n            <p>\n                Then vote on which Giphys are the best. After each round, the winner is the Giphy with the most votes.\n            </p>\n            <p>\n                <br><label><input placeholder="choose your username"v-model="username"></label>\n                <div class ="btn-container"><router-link tag="button" to="/searchgif">Lets Play!</router-link></div>\n            </p>\n        \n        </div>'
    //has to be wrapped in single element, even if its just a div
});
//# sourceMappingURL=HomeComponent.js.map
