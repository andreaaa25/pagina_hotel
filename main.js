// JavaScript Document
var	imagenes = ['imagenes/piscina1.jpg', 'imagenes/spa1.jpg', 'imagenes/comedor1.jpg', 'imagenes/comida1.jpg', 'imagenes/cabana1.jpg', 'imagenes/sendero1.jpg'],
	cont = 0;

function carrousel(galeria){
	galeria.addEventListener('click', e => {
		let atras = galeria.querySelector('.atras'),
		adelante = galeria.querySelector('.adelante'),
		img = galeria.querySelector('img'),
		tgt = e.target;
	
	if(tgt == atras){
		if(cont > 0){
			img.src = imagenes[cont - 1];
			cont--;
		} else {
			img.src = imagenes[imagenes.length - 1];
			cont = imagenes.length - 1;
		}
	} else if(tgt == adelante){
		if(cont < imagenes.length - 1){
			img.src = imagenes[cont + 1];
			cont++;
		} else {
			img.src = imagenes[0];
			cont = 0;
		}
	}						 
});
}
document.addEventListener("DOMContentLoaded",() => {
	let galeria = document.querySelector('.galeria');
	
	carrousel(galeria);
});
	
