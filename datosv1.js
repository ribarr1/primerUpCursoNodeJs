const {estudiante,obtenerPromedio} = require ('./calculos');
const fs = require('fs');

console.log('El nombre del estudiante es: ' + estudiante.nombre)
console.log(estudiante); 
console.log('El promedio es:' + obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

let {nombre, edad : age, notas:{matematicas,ingles,programacion}} = estudiante;

console.log('El nombre del estudiante es: ' + nombre)
console.log('La edad del estudiante es: ' + age)
console.log('El promedio es:' + obtenerPromedio(matematicas,ingles,programacion));
console.log('La edad en alias del estudiante es: ' + age)


let crearArchivo = (estudiante) =>{
	texto = 'El nombre del estudiante es: ' + nombre + '\n' +
			'Ha obtenido un promedio de: ' + obtenerPromedio(matematicas,ingles,programacion);

	fs.writeFile('promedio.txt', texto, (err) => {
		if (err) throw(err);
		console.log ('se ha creado el archivo')
	});			
}

crearArchivo(estudiante);