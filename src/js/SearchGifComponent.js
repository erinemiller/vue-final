let SearchGifComponent = Vue.component('searchgif', {
    data: function () {
        return {
            searchText: '',
            gifData: null       
        }
    },
    
    watch: {
        searchText: function(){
            console.log("user entered a search term for giphy search", this.searchText);
            this.gifSearch(this.searchText)
        }
    },
     
    methods: {
        gifSearch: function(searchText){
            axios
                .get('https://api.giphy.com/v1/gifs/search?api_key=B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM&q=mario&limit=25&offset=0&rating=G&lang=en')
                .then((response) => {
                    console.log(response);
                    this.gifData = response.data.data;                   
                })
                .catch((error) => {
                    console.warn(error);
                });
          },
          submitGiphy: function(giphyURL) {
			console.log('submitGiphy');
            this.$emit('submittedgiphy', giphyURL);
        
          }
    },



    props: ["username", "status"],     
    template:
        `
            <div>
                <router-link tag="button" to="/"><a> &gt; BACK </a></router-link>

                <div class="blink-me"><p>Hi, {{ username }} </p></div>

                <p>Choose a Giphy to match this subject: {{ status.question }} </p>

                <label><input v-model="searchText" placeholder="search gifs"></label>
                
                <ul class="giphys">
                    <li v-for="giphy in gifData">
                         <img @click="gifSearch(giphy.images.original.url)"  v-bind:src="giphy.images.original.url">
                    </li>
                </ul>

                <div class ="btn-container"><router-link tag="button" to="/votegif"><a>SUBMIT</a></router-link>
                  
                </div> </p>
                
            </div>
        `
  //has to be wrapped in single element, even if its just a div
  
})

