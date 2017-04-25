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


