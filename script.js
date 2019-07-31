$( ".menu" ).click(()=>{
  $( ".container" ).toggleClass( "hidden" );
  $( ".nav" ).toggleClass( "hidden" );
  $( "body" ).toggleClass( "dark" );
  $( "main" ).toggleClass( "wide" );
});
