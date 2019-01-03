//alert pub X au bout de 10sec
//setTimeout( function ( ) { alert( "Hey le site xxxvidsxxx est trop bien. Viens dessus //stp please" ); }, 10000 ); 

//pop up pub X avec redirection si oui
function popupx(){
   if (confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')) {
     window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
   }
   else {

   }
 }
 window.onload = setTimeout(popupx, 10000)
