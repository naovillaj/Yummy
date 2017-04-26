
var x = document.getElementsByClassName("img-slider");
var dots = document.getElementsByClassName("button-slider");

for (var i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click',currentDiv);
	// x[i].style.display="block";
	if(i==0){
		x[0].style.display="block";
	}
	if(i==1){
		x[1].style.display="block";
	}
	if(i==2){
		x[2].style.display="block";
	}
	console.log(this);
}

function currentDiv(n) {
	if(n.screenX==367 && n.screenY==355){
		showDivs(slideIndex-1);
	}

	if(n.screenX==395 && n.screenY==357){
		showDivs(slideIndex);
	}

	if(n.screenX==428 && n.screenY==358){
		showDivs(slideIndex+1);
	}

  console.log(n);
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

var index = 0;
slider();

function slider() {
    var imgSlider = document.getElementsByClassName("img-slider");
    for (var i = 0; i < imgSlider.length; i++) {
       imgSlider[i].style.display = "none";
    }
    index++;
    if (index > imgSlider.length) {index = 1}
    imgSlider[index-1].style.display = "block";
    setTimeout(slider, 3500);
}





//Videos
var button = document.getElementsByClassName("play");
var video = document.getElementsByClassName("video");

for(var i=1; i<=video.length+1; i++){
	function playPause() {

		if (this.childNodes[1].paused){
			this.childNodes[1].play();
	    	this.childNodes[1].addEventListener("play", function(){
	    		console.log(this);
		    	this.setAttribute("controls", "");
		        this.nextElementSibling.innerText = "||";
	    	});

	    }else{
	    	this.childNodes[1].pause();
	        this.childNodes[1].addEventListener("pause", function(){
	        	console.log(this);
		        this.removeAttribute("controls")
		        this.nextElementSibling.innerText = ">";
	        });

	    }
	}
}

for(var i=1; i<=video.length+1; i++){
	function pausePlay() {

		if (this.childNodes[1].played){
			this.childNodes[1].pause();
	    	this.childNodes[1].addEventListener("pause", function(){
	    		this.removeAttribute("controls", "");
		        this.nextElementSibling.innerText = ">";
	    	});

	    }else{
	    	this.childNodes[1].play();
	        this.childNodes[1].addEventListener("play", function(){
	        	this.setAttribute("controls")
		        this.nextElementSibling.innerText = "||";
	        });

	    }
	}
}


for(var i=0; i<button.length; i++){

	button[i].parentNode.addEventListener("mouseover", playPause);

}

for(var i=0; i<button.length; i++){

	button[i].parentNode.addEventListener("mouseout", pausePlay);

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

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(e){
	e.preventDefault();


	if(nombre.value=="" || apellido.value== "" || correo.value==""){
		enviar.nextElementSibling.innerText = "Todos los datos deben de estar llenos";
		console.log(enviar.nextElementSibling);
	}else{
		enviar.nextElementSibling.innerText = "";
	document.getElementById("formulario").reset();

	}
})



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
