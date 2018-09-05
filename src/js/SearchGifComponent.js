let SearchGifComponent = Vue.component('searchgif', {
    data: function () {
        return {
            
        }
    },
    props: ["username", "status"],
    methods: {
        gifSearch: function(){
            axios
              .get('https://api.giphy.com/v1/gifs/search?api_key=B4PzECN4osdlqLZSB7c8yvPFuYYVqzrM&q=mario&limit=25&offset=0&rating=G&lang=en')
              .then(function(response) {
                console.log(response);
                // this.info = response;
              })
          }
    },
    
  template:
   `
        <div>

        <router-link tag="button" to="/"><a> >BACK </a></router-link>
        <div class="blink-me"><p>Hi, {{ username }} </p></div>
        <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:</p>
        <p> {{ status }}</p>
        <input type="text"> <button class="submit"> Search</button>

        <p><br><br> select gif and submit</p>
        <p><br><br><br><br><br><br><router-link tag="button" to="/submitgif"><a>SUBMIT</a></router-link> </p>

        </div>
    `
  //has to be wrapped in single element, even if its just a div
  
})