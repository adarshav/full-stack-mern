var h2 = document.createElement('h2');
        var h2Text = document.createTextNode('Listing Products');
        h2.appendChild(h2Text);
        
        var appHandle = document.getElementById('app');
        appHandle.appendChild(h2);
        var ol = document.createElement('ol');
        axios.get('http://dct-api-data.herokuapp.com/products.json')
        .then(function(response) {
            console.log(response.data);
            var products = response.data;
    
            products.forEach(function(product) {
                var li = document.createElement('li');
                var liText = document.createTextNode(product.name);
                li.appendChild(liText);
                ol.appendChild(li);
            });
            appHandle.appendChild(ol);
        })
        .catch(function(error) {
            console.log(error);
        });