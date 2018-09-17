let SearchGifComponent = Vue.component('searchgif', {
    data: function () {
        return {
            searchText: '',
            gifData: null,
            giphyURL: '',      
            clickGif: false
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
            this.giphys = [];
            axios
                .get("https://api.giphy.com/v1/gifs/search?q=" + this.searchText + "&limit=25&offset=0&rating=G&lang=en" + "&api_key=B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM")
                .then((response) => {
                    console.log(response);
                    this.gifData = response.data.data;                   
                })
                .catch((error) => {
                    console.warn(error);
                });
          },
        selectGif: function selectGif(giphyURL) {
			// console.log('clicked', giphyLink);

			this.$emit("selectedgif", giphyURL); //selected gif event up to app

			// document.querySelectorAll(".active-giphy").forEach(function (activeGiphy) {
			// 	activeGiphy.classList.remove(".active-giphy");
			// });

			// event.target.classList.add("active-giphy");
        },
        // submitGif: function(giphyURL) {
		// 	console.log('submit gif');
        //     this.$emit('submitgif', giphyURL);
        //     this.$router.push("/votegif");
        // }
        
        
          
    }, 



    props: ["username", "status"],     
    template:
        `
            <div>
                <router-link tag="button" to="/"><a> BACK </a></router-link>

                <div class="blink-me"><p>Hi, {{ username }} </p></div>

                <p>Choose a Giphy to match this subject: {{ status.question }} </p>

                <label><input v-model="searchText" placeholder="search gifs"></label>
                
                <div> <ul class="giphys">
                <li v-for="giphy in gifData">
                    <img @click="selectGif(giphy.images.original.url)" alt="" v-bind:src="giphy.images.original.url">
                </li>
                </ul>
                
                  
                </div> 
                
            </div>
        `
  //has to be wrapped in single element, even if its just a div
  // <div class ="btn-container"><router-link tag="button" to="/votegif"><a>SUBMIT</a></router-link>
})

