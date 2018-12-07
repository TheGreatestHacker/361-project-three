//Use javascript to modify the DOM
//use IIFE (Immediately Invoked Function Expression)
(function(){
  if (typeof(document.querySelector)==="undefined") {
    //if document.querySelector is undefined, then just
    //return and get out
    return;
  }
  //being unobstrusive JavaScript Below...
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });//end event listener on collapsible
  }//end for

})();//end IIFE
