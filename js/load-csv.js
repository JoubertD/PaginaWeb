var datos = undefined;
// Loading a CSV using D3
d3.dsv( ";", "data/pets-citizens.csv" )
  .then( function( data ) {
    datos = data;
  } )
  .catch( function( error ) {
    // handle error   
  } );



