'use strict';

var VoteGifComponent = Vue.component('votegif', {
    data: function data() {
        return {};
    },
    methods: {
        userVotes: function userVotes(index) {
            console.log('votes', index);
            axios.post('http://circuslabs.net:6432/upvote/' + index, {
                username: this.username
            }).then(function (response) {
                console.log('upvote');
            }).catch(function (error) {
                console.log('error');
            });
        }
    },
    props: ["username", "status"],
    template: '\n        <div>\n\n            <router-link tag="button" to="/searchgif"><a> BACK </a></router-link>\n            <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>\n            <p> "{{ status.question }}" </p>\n            <p> You have {{Math.round(status.timeLeftInPhase/1000)}} seconds left! </p>\n            \n            \n            <p> {{ status.submissions.length }} Submissions</p>\n\n            <ul class="votes">\n\t\t\t\t<li v-for="(submission, index) in status.submissions">\n\t\t\t\t\t<img @click="userVotes(index)" :src="submission.giphyURL">\n\t\t\t\t\t{{submission.username}} {{submission.upvote.length}} votes\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\n        </div>\n    '
    //has to be wrapped in single element, even if its just a div
});
//# sourceMappingURL=VoteGifComponent.js.map
