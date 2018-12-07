//Use javascript to modify the DOM
//use IIFE (Immediately Invoked Function Expression)
(function(){
  if (typeof(document.querySelector)==="undefined") {
    //if document.querySelector is undefined, then just
    //return and get out
    return;
  }
  //being unobstrusive JavaScript Below...
  document.addEventListener('DOMContentLoaded', function(){
    //JavaScript that works on the DOM wil be written here
    console.log('The DOM has loaded.');

    //add a js class ln the <html> element...
    document.querySelector('html').className = 'js';

    var navigation = document.querySelector('#navigation');

    // Build the outer heading element
    var nav_heading = document.createElement('h2');
    // Build the inner anchor/link element
    var menu_link = document.createElement('a');
    menu_link.textContent = 'Menu';
    menu_link.setAttribute('id','menu-button');
    menu_link.setAttribute('href','#null');
    menu_link.setAttribute('tabindex', '1');
    // Append the menu_link to the heading element
    nav_heading.append(menu_link);

    // Finally, append the nav_heading to #navigation
    navigation.appendChild(nav_heading);

    //Listen for clicks on #menu-button and toggle the visible class
    var menu-button = document.querySelector('#menu-button');
    menu_button.addEventListener('click', function(e) {
      classList.toggle('visible');
      e.preventDefault();
    })

  });//end addEventListener

})();//end IIFE
