let VoteGifComponent = Vue.component('votegif', {
    data: function () {
        return {
            
        }
    },
    methods: {
        userVotes: function(index) {
			console.log('votes', index);
			axios
				.post('http://circuslabs.net:6432/upvote/' + index, {
					username: this.username
				})
				.then((response) => {
					console.log('upvote');
				})
				.catch(function (error) {
					console.log('error');
                })
            }
    },
    props: ["username", "status"],
    template: 
  `
        <div>

            <router-link tag="button" to="/searchgif"><a> BACK </a></router-link>
            <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>
            <p> "{{ status.question }}" </p>
            <p> You have {{Math.round(status.timeLeftInPhase/1000)}} seconds left! </p>
            
            
            <p> {{ status.submissions.length }} Submissions</p>

            <ul class="votes">
				<li v-for="(submission, index) in status.submissions">
					<img @click="userVotes(index)" :src="submission.giphyURL">
					{{submission.username}} {{submission.upvote.length}} votes
				</li>
			</ul>


        </div>
    `
  //has to be wrapped in single element, even if its just a div
});