'use strict';

var SubmitGifComponent = Vue.component('submitgif', {
    data: function data() {
        return {};
    },
    template: '\n        <div>\n\n        <router-link tag="button" to="/searchgif"><a> >BACK </a></router-link>\n        <h1>Vote for a Winner</h1>\n        <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>\n        <p> "subject here"</p>\n        <p>You have __ seconds to vote! </p>\n        <p>Submissions</p>\n\n        </div>\n    '
    //has to be wrapped in single element, even if its just a div
});
//# sourceMappingURL=SubmitGifComponent.js.map
