
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
   for (var i = data.length - 1; i >= 0; i--) {
   	console.log(data[i]);
   }
  } )
  .catch( function( error ) {
    // handle error   
  } );