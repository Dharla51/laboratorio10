let esMayorDeEdad= true;  
let tieneLicencia= true; 
let PuedeConducir= esMayorDeEdad && tieneLicencia;  
let PuedeConducir2=esMayorDeEdad || tieneLicencia; 
console.log("BIENVENIDO AL CURSO DE CONDUCCION")
console.log("PUEDE CONDUCIR: "+PuedeConducir);  
console.log("PUEDE CONDUCIR POR SER MAYOR DE EDAD: "+esMayorDeEdad);
document.write("BIENVENIDO AL CURSO DE CONDUCCION"); 
document.write("<br>"); 
document.write("PUEDE CONDUCIR: "+PuedeConducir); 
document.write("<br>"); 
document.write("PUEDE CONDUCIR POR SER MAYOR DE EDAD: "+esMayorDeEdad); 