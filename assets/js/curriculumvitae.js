// Global Variables
var jsfileversion="0004";

function showMenuComponent(sect) {
var elements = document.getElementsByClassName('MenuComponent');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }

/* var w = document.getElementById('imgbground'); */
/* w.style.display = 'none'; */

/* var w = document.getElementById('imgbground-blur');*/
/* w.style.display = 'none';*/

var x = document.getElementById(sect);
x.style.display = 'block';

/* var elements2 = document.getElementsByClassName(sect + '-display');*/

    for (var i = 0; i < elements2.length; i++){
        elements2[i].style.display = 'block';
    }



/* document.getElementById('JSSerNo').textContent='.'+jsfileversion;*/

/* document.getElementById('navbarNavDropdown').className='navbar-collapse show';*/
/* window.history.pushState('','Warksar Home','#'+sect+'-Top');*/

var container = document.getElementsByClass("logo");
    var content = container.innerHTML;
    container.innerHTML= content; 
}

