var countHandle = document.getElementById('count');
var textHandle = document.getElementById('text');

var wordCount = 0;
var charCount = 0;
var array;
textHandle.addEventListener('keyup', function() {
    
   if(textHandle.value !== '') {
        charCount = textHandle.value.length;
        wordCount = textHandle.value.split(' ').length;
   } else {
       charCount = 0;
       wordCount = 0;
   }
        
        // charCount = i + 1;
        // wordCount = array.length;
        // if(textHandle.value !== '') {
        //      array = textHandle.value.split(' ');
        // }
        

    countHandle.innerHTML = `you have written ${wordCount} words and ${charCount} characters`;
}, false);
