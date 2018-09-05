let SubmitGifComponent = Vue.component('submitgif', {
    data: function () {
        return {
        }
    },
  template: 
  `
        <div>

        <router-link tag="button" to="/searchgif"><a> >BACK </a></router-link>
        <h1>Vote for a Winner</h1>
        <p>Vote for the funniest, sickest, awesomest, or silliest giphy that matches this subject:<p>
        <p> "subject here"</p>
        <p>You have __ seconds to vote! </p>
        <p>Submissions</p>

        </div>
    `
  //has to be wrapped in single element, even if its just a div
})