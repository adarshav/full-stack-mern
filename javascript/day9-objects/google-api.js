var result = {
    "destination_addresses" : [ "New York, NY, USA" ],
    "origin_addresses" : [ "Washington, DC, USA" ],
    "rows" : [
       {
          "elements" : [
             {
                "distance" : {
                   "text" : "225 mi",
                   "value" : 361715
                },
                "duration" : {
                   "text" : "3 hours 49 mins",
                   "value" : 13725
                },
                "status" : "OK"
             }
          ]
       }
    ],
    "status" : "OK"
 }
 var destination = `${result.destination_addresses[0]}`;
 console.log(destination);
 var origin = `${result.origin_addresses[0]}`;
 console.log(origin);
 console.log(result.rows.elements.distance.text);