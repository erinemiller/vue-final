'use strict';

var SearchGifComponent = Vue.component('searchgif', {
    data: function data() {
        return {
            searchText: '',
            gifData: null
        };
    },

    watch: {
        searchText: function searchText() {
            console.log("user entered a search term for giphy search", this.searchText);
            this.gifSearch(this.searchText);
        }
    },

    methods: {
        gifSearch: function gifSearch(searchText) {
            var _this = this;

            axios.get('https://api.giphy.com/v1/gifs/search?api_key=B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM&q=mario&limit=25&offset=0&rating=G&lang=en').then(function (response) {
                console.log(response);
                _this.gifData = response.data.data;
            }).catch(function (error) {
                console.warn(error);
            });
        },
        submitGiphy: function submitGiphy(giphyURL) {
            console.log('submitGiphy');
            this.$emit('submittedgiphy', giphyURL);
        }
    },

    props: ["username", "status"],
    template: '\n            <div>\n                <router-link tag="button" to="/"><a> &gt; BACK </a></router-link>\n\n                <div class="blink-me"><p>Hi, {{ username }} </p></div>\n\n                <p>Choose a Giphy to match this subject: {{ status.question }} </p>\n\n                <label><input v-model="searchText" placeholder="search gifs"></label>\n                \n                <ul class="giphys">\n                    <li v-for="giphy in gifData">\n                         <img @click="gifSearch(giphy.images.original.url)"  v-bind:src="giphy.images.original.url">\n                    </li>\n                </ul>\n\n                <div class ="btn-container"><router-link tag="button" to="/votegif"><a>SUBMIT</a></router-link>\n                  \n                </div> </p>\n                \n            </div>\n        '
    //has to be wrapped in single element, even if its just a div

});
//# sourceMappingURL=SearchGifComponent.js.map
