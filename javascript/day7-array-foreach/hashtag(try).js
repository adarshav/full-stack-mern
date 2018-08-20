function hashTag(words) {
     //var strArr = words.split(',');
     //console.log(strArr);
     var result =['#'];
     for(var i = 0;i < words.length;i++) {
         result.push(words[i].charAt(0).toUpperCase());
     }
     return result;
}
console.log(hashTag(words));
var words = 'make in india';