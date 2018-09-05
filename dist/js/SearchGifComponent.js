"use strict";

var SearchGifComponent = Vue.component('searchgif', {
    data: function data() {
        return {};
    },
    props: ["username", "status"],
    methods: {
        gifSearch: function gifSearch() {
            axios.get('https://api.giphy.com/v1/gifs/search?api_key=B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM&q=mario&limit=25&offset=0&rating=G&lang=en').then(function (response) {
                console.log(response);
                // this.info = response;
            });
        }
    },

    template: "\n        <div>\n\n        <router-link tag=\"button\" to=\"/\"><a> >BACK </a></router-link>\n        <div class=\"blink-me\"><p>Hi, {{ username }} </p></div>\n        <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:</p>\n        <p> {{ status }}</p>\n        <input type=\"text\"> <button class=\"submit\"> Search</button>\n\n        <p><br><br> select gif and submit</p>\n        <p><br><br><br><br><br><br><router-link tag=\"button\" to=\"/submitgif\"><a>SUBMIT</a></router-link> </p>\n\n        </div>\n    "
    //has to be wrapped in single element, even if its just a div

});
//# sourceMappingURL=SearchGifComponent.js.map
