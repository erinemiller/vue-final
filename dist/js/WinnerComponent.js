'use strict';

var WinnerComponent = Vue.component('winnergif', {
    data: function data() {
        return {};
    },
    watch: {
        status: function status() {
            if (this.status.phase != 'post-game') {
                this.$router.push('/winnergif');
            }
        }
    },
    props: ['status'],

    template: '\n    <div class="winner">\n        <div v-if="status && status.submissions && status.submissions.length">\n            <h1> Congrats, {{ status.submissions[0].username }} !!! </h1> \n            <p> You won!!! </p>\n            <p> <img :src="status.submissions[0].giphyURL"> </p>\n        <router-link to="/" class="nav"> play again </router-link>\n        </div>\n    </div>\n    '
    //has to be wrapped in single element, even if its just a div
});
//# sourceMappingURL=WinnerComponent.js.map
