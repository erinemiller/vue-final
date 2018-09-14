'use strict';

var SubmitGifComponent = Vue.component('submitgif', {
    data: function data() {
        return {
            timeLeft: ''
        };
    },
    methods: {
        //voting method
    },
    props: ["username", "status"],
    template: '\n        <div>\n\n            <router-link tag="button" to="/searchgif"><a> &gt; BACK </a></router-link>\n            <p>Vote</p>\n            <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>\n            <p> {{ status.question }}</p>\n            <p>You have __ seconds to vote! </p>\n            <p>Submissions</p>\n\n        </div>\n    '
    //has to be wrapped in single element, even if its just a div
});
//# sourceMappingURL=SubmitGifComponent.js.map
