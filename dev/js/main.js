mybutton = document.querySelector('back_to_top');

window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
