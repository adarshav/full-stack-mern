var axios = require('axios');
var id = 4;
var url = `http://dct-api-data.herokuapp.com/users/${id}.json`;
axios.delete(url)
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error);
})
