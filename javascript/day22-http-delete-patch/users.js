var axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/users';
axios.get(url)
.then(function(response) {
    var users = response.data;
    users.forEach(function(user) {
        console.log(`id: ${user.id}\n name:${user.name}\n email:${user.email}\n address: ${user.address.street},  ${user.address.suite}\n city: ${user.address.city}\n zipcode: ${user.address.zipcode}\n geo:${user.address.geo.lat}, ${user.address.geo.lng}\n phone: ${user.phone}\n website: ${user.website}\n company: ${user.company.name}\n..........................`);
    });
})
.catch(function(error) {
    console.log(error);
})