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

var button = document.getElementsByClassName("play");
var video = document.getElementsByClassName("video");

for(var i=1; i<=video.length+1; i++){
	function playPause() {
		// console.log(this.childNodes[1].nextElementSibling.innerText="||")
		console.log(this.childNodes[i]);
		console.log(button[1].value);
		// console.log(this.childNodes[1]);
	    if (this.childNodes[1].paused){ 
	    	// console.log(button[i]);
	        this.childNodes[1].play();
	        this.childNodes[1].setAttribute("controls", "");
	        this.childNodes[1].nextElementSibling.innerText = "||"; 
	    }else{ 
	        this.childNodes[1].pause();
	        this.childNodes[1].removeAttribute("controls")
	        this.childNodes[1].nextElementSibling.innerText = ">";
	    } 
	} 
}



// button[0].parentNode.addEventListener("mouseover", function(e){
// 	console.log("dsdsa"+video[0].play());
// });

for(var i=0; i<button.length; i++){

	button[i].parentNode.addEventListener("mouseover", playPause);
	// console.log(this);

}

for(var i=0; i<button.length; i++){

	button[i].parentNode.addEventListener("mouseout", playPause);
	// console.log(this);

}


var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");

var soloLetras = function(e){
var codigoTecla = e.keyCode;  
if((codigoTecla>=97 && codigoTecla<=122) || codigoTecla == 241 || (codigoTecla>=65 && codigoTecla<=90) || codigoTecla == 209 
    || codigoTecla == 42 || codigoTecla == 250 || codigoTecla == 225 || codigoTecla == 233 || codigoTecla == 237 
    || codigoTecla == 243 || codigoTecla == 32){
  return true;
}else{
  return false;
}
}

nombre.onkeypress = soloLetras;
apellido.onkeypress = soloLetras;

 var inputs = document.getElementsByClassName("input-registro");

var comentario = function(){
	if(this.value.trim().length==0){
	   this.value="";
	   this.nextElementSibling.nextElementSibling.innerText="*Este elemento es obligatorio" ;
	} else {
	   this.nextElementSibling.nextElementSibling.innerText="" ;
	}

	if(this.getAttribute("type") == "text"){

		var arrDato = this.value.split(" ");
		var datoConMayusculas = "";
		for(var i = 0; i<arrDato.length; i++){
		    datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
		    console.log(datoConMayusculas);
		}
		  this.value=datoConMayusculas;
		  
		}

	if(this.getAttribute("type") == "email"){
 		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( !expr.test(this.value) ){
			this.nextElementSibling.nextElementSibling.innerText="*No coincide con el formato establecido (nombre@domain.com)" ;
 		} else {
			this.nextElementSibling.nextElementSibling.innerText="" ;
		         
		}
 	} 
}



for(var i = 0; i< inputs.length; i++){
inputs[i].onblur = comentario;
}



var ultimoScrollTop = 0;
window.addEventListener('scroll',function(){
	var navHeader = document.getElementById('nav-header');

	var accionScroll = window.pageYOffset || document.documentElement.scrollTop;
	if (accionScroll > ultimoScrollTop) {
		navHeader.classList.remove('bg-header');
		navHeader.style.opacity = 0;
	}
	else{
		navHeader.classList.add('bg-header');
		navHeader.style.opacity = 1 ;
		if (accionScroll <= 3) {
			navHeader.classList.remove('bg-header');
		}
	}
	ultimoScrollTop = accionScroll;
},false);