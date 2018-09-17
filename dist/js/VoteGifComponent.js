"use strict";

var VoteGifComponent = Vue.component('votegif', {
    data: function data() {
        return {};
    },
    methods: {
        //voting method
    },
    props: ["username", "status"],
    template: "\n        <div>\n\n            <router-link tag=\"button\" to=\"/searchgif\"><a> &gt; BACK </a></router-link>\n            <p>Vote</p>\n            <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>\n            <p> {{ status.question }}</p>\n            <p> You have {{Math.round(status.timeLeftInPhase/1000)}} </p>\n            <p>Submissions</p>\n\n        </div>\n    "
    //has to be wrapped in single element, even if its just a div
});
//# sourceMappingURL=VoteGifComponent.js.map
