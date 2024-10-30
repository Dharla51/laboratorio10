let Nombre= prompt("DIGITE SU NOMBRE: "); 
let Edad= prompt("DIGITE SU EDAD: ") 
let Estudiante= prompt("¿ERES ESTUDIANTE?(NO/SI): ").toLowerCase(); 
if (Edad>=18){ 
console.log("TU ERES MAYOR DE EDAD");
document.write("TU ERES MAYOR DE EDAD"); 
document.write("<br>");
}else{ 
console.log("TU ERES MENOR DE EDAD"); 
document.write("TU ERES MENOR DE EDAD");
document.write("<br>");
} 
if (Estudiante=="si"){ 
console.log("SI TIENES DERECHO A DESCUENTO POR SER ESTUDIANTE"); 
document.write("SI TIENES DERECHO A DESCUENTO POR SER ESTUDIANTE"); 
document.write("<br>"); 
}else { 
    console.log("NO TIENES DERECHO A DESCUENTO POR NO SER ESTUDIANTE"); 
    document.write("NO TIENES DERECHO A DESCUENTO POR NO SER ESTUDIANTE"); 
    } 
