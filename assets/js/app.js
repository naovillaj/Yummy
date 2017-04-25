var x = document.getElementsByClassName("img-slider");
var dots = document.getElementsByClassName("button-slider");

var slideIndex = 1;
showDivs(slideIndex);

for (var i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click',currentDiv(i));
	console.log(this);
	
}


function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" button-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " button-white";
}

var Index = 0;
slider();

function slider() {
    var imgSlider = document.getElementsByClassName("img-slider");
    for (var i = 0; i < imgSlider.length; i++) {
       imgSlider[i].style.display = "none";  
    }
    Index++;
    if (Index > imgSlider.length) {Index = 1}    
    imgSlider[Index-1].style.display = "block";
    setTimeout(slider, 3500); 
}