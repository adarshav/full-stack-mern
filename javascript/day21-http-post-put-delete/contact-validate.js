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
        var phoneNum = parseInt(data.mobile);
        var mobileValidation;
        var nameValidation;
        var emailValidation;
        var falseStatements = [];
        function numberValidate() {
            if(data.mobile.length === 10) {
                mobileValidation = true;
            } else {
                falseStatements.push('Mobile number should be 10 in length');
            }
        }
        function name() {
           if(data.length !== 0) {
                nameValidation = true;
           } else{
               falseStatements.push('Name cannot be empty');
           }
        }
        function email() {
            if(data.email.length > 0) {
                emailValidation = true;
            } else{
                falseStatements.push('E-mail should be greater than 0');
            }
        }
        function validate() {
            numberValidate();
            name();
            email();
        }
        validate();
        if(mobileValidation === true && nameValidation === true&& emailValidation === true) {
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
    } else {
        //console.log(falseStatements);
        falseStatements.forEach(function(statement) {
            console.log( statement);
        });
    }
}
}
        
// var cf1 = new ContactForm({name:'adarsha', email:'asd@gmail.com',mobile:'9663304987',message:'get Out'});
// cf1.submit();
var cf2 = new ContactForm({name:'', email:'', mobile:'12345678910'});
cf2.submit();