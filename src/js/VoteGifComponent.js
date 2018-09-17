let VoteGifComponent = Vue.component('votegif', {
    data: function () {
        return {
            
        }
    },
    methods: {
        //voting method
    },
    props: ["username", "status"],
    template: 
  `
        <div>

            <router-link tag="button" to="/searchgif"><a> &gt; BACK </a></router-link>
            <p>Vote</p>
            <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>
            <p> {{ status.question }}</p>
            <p> You have {{Math.round(status.timeLeftInPhase/1000)}} </p>
            <p>Submissions</p>

        </div>
    `
  //has to be wrapped in single element, even if its just a div
})