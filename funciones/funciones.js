
function cambiar_fecha(){
	
	
	
n =  new Date();
	//Año
	y = n.getFullYear();
	//Mes
	m = n.getMonth() + 1;
	//Día
	d = n.getDate();

if(d<10){
	d='0'+d;
   
   }
if(m<10){
	m='0'+m;
   
   }


	ejemplo= y + "-" + m + "-" + d;
//Lo ordenas a gusto.
document.getElementById("fecha_entrada").setAttribute("min", y + '-' + m + '-' + d);
	fecha_user=document.getElementById("fecha_entrada").value;
	fecha_user = new Date(fecha_user);
	fecha_anio=fecha_user.getFullYear();
		fecha_mes=fecha_user.getMonth();
		fecha_dia=fecha_user.getDate();
	
	fecha_user.setDate(fecha_user.getDate()+1);
	
	
	
	document.getElementById("fecha_salida").setAttribute("min", fecha_anio + '-' + (fecha_mes+1)+ '-' + fecha_dia);
	
	
	
		document.getElementById("fecha_salida").setAttribute("max", (y+1) + '-' + m + '-' + d);

}
var myIndex = 0;


function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}
	//x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 2000);
}

carousel();

document.getElementById().style



	
function reservar() {
	
	//DECLARAMOS LAS VARIABLES QUE INTRODUCE EN USUARIO EN EL FORMULARIO
	var fecha_entrada = document.getElementById("fecha_entrada").value;
	var fecha_salida = document.getElementById("fecha_salida").value;
	 fecha_entrada = new Date(fecha_entrada);
	 fecha_salida = new Date(fecha_salida);

	var tiempo = fecha_salida.getTime() - fecha_entrada.getTime();
    /*GUARDAMOS EL NUMERO DE DIAS ENTRE LAS DOS FECHAS*/
	var tiempo = Math.floor(tiempo / (1000 * 60 * 60 * 24));
	
	
	//NUMERO DE HABITACIONES
	var n_habitaciones=document.getElementById("numero_habitaciones").value;
    
	
	//NUMERO DE ADULTOS
	var n_adultos=document.getElementById("numero_adultos").value;
	
	//NUMERO DE NIÑOS
	var n_ninos=document.getElementById("numero_ninos").value;
		
	//NUMERO DE CUNAS
	var n_cunas=document.getElementById("numero_cunas").value;

	document.getElementById("numero_adultos").setAttribute("max", n_habitaciones*4);
		document.getElementById("numero_cunas").setAttribute("max", n_habitaciones*3);

	
	
	
	
	
	
	
	
	/*TARIFAS DEL HOTEL
	DIA DEL HOTEL-->160
	HABITACION --> 80
	ADULTO-->40
	NIÑOS -->25
	CUNAS -->20
	*/
	
	//CALCULAMOS EL PRECIO FINAL DE LA ESTANCIA
	precio=tiempo*120+1;
	precio=precio+n_habitaciones*80;
	precio=precio+n_adultos*40;
	precio=precio+n_ninos*25;
	precio=precio+n_cunas*20;
	
	
	document.getElementById("datos").innerHTML="Precio:"+precio;
	

}

function vercunas() {
	document.getElementById("numero_cunas").style.display = "block";
	document.getElementById("numero_cunas_texto").style.display = "block";
}