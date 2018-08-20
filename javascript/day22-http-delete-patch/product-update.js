var axios = require('axios');
var id = 36;
var url = `http://dct-api-data.herokuapp.com/contact_forms/${id}.json`;
axios.patch(url, {//axios.put can also be used 
    message:'Iam God, God is Great',
    name:'Heegu unte NarayanSwamy'
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.response.data.error);
})