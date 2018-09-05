let HomeComponent = Vue.component('home', {
    data() {
        return {
            username: '',
        }
    },
    watch: {
        username: function(username) {
            console.log('username changed!', username);
            this.$emit('loggedin', username);
        }
    },
    methods: {
    },
    template: 
        `<div>

            <div class="title">GIPHY</div>
            <div class="title">BATTLE</div>
            <p>
                Watch the game screen to see the subject,then choose a Giphy to match it in the funniest, sickest, awesomest, or silliest way possible.
            </p>
            <p>
                Then vote on which Giphys are the best. After each round, the winner is the Giphy with the most votes.
            </p>
            <p>
                Choose Username: <label><input v-model="username"></label>
                <router-link tag="button" to="/searchgif">Submit</router-link>
            </p>
        
        </div>`
  //has to be wrapped in single element, even if its just a div
})

