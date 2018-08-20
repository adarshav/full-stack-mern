var name = 'shree';
var axios = require('axios');
var url = 'https://www.gender-api.com/get?name=shree&key=pRPLCejozFwCHFbVCR';
//var uri = 'https://www.gender-api.com/get';
/*if we want 2 give url uri cannot be given if uri is given url should not be given
axios.get(uri, {
    //es6 feature -concise properties (when property name and the variable name used to assign to the property is the same the we can inside the obj just mention the property name ) we use this
    params: {
        name,
        key
    }
})
*/
axios.get(url)
.then(function(response) {
    console.log(`the gender of ${name} is ${response.data.gender}`);

})
.catch(function(error) {
console.log(error);
})

