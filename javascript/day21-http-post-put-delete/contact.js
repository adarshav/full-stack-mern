//Object constructor function here multiple arguments or parameters are not sent the whole is sent as an object
var axios = require('axios');
function ContactForm(data) {
    this.name = data.name;
    this.email = data.email;
    this.mobile = data.mobile;
    this.message = data.message;
    this.submit = function() {
        var dataToSend = {
            name:this.name,
            email:this.email,
            mobile:this.mobile,
            message:this.message
        };
        axios.post('http://dct-api-data.herokuapp.com/contact_forms.json', dataToSend)
        .then(function(response){
            console.log('data coming from this time');
            console.log(response.data);
        })
        .catch(function(error) {//server side error being displayed in the UI
            //console.log(error.response.data);
            var errors = error.response.data;
            console.log('server side errors are');
            for(var key in errors) {//for in iteration is used like this and its used only for objects
                console.log(key, errors[key].join(', '));
            }
        });
    }
}
var cf1 = new ContactForm({name:'adarsha', email:'asd@gmail.com',mobile:'9663304987',message:'get Out'});
cf1.submit();
var cf2 = new ContactForm({name:'', email:'', mobile:'1234567890'});
cf2.submit();