var axios = require('axios');
var id = 121;
var url = `http://dct-api-data.herokuapp.com/contact_forms/${id}.json`;//while deleting in the server it should be accomplished with template strings
axios.delete(url)//the id is deleted it returns an dollar prompt
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    //console.log('code', error.response.data.status);
    if(error.response.data.error === 'Not Found') {
        console.log('the page you are looking for seems do not exist');
    }
})