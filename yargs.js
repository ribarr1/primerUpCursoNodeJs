const nombre = {
	demand:true,
	alias:'n'
}

const matematicas = {
	demand:true,
	alias:'m'
}

const ingles = {
	demand:true,
	alias:'i'
}

const programacion = {
	demand:true,
	alias:'p'
}

const creacion ={
	nombre,
	matematicas,
	ingles,
	programacion
}

const muestraest = {
	nombre
}

const muestraprom ={
	nombre
}

const actualiza = {
	nombre,
	asignatura: {
		demand: true,
		alias: 'a'
	},
	calificacion : {
		demand: true,
		alias: 'c'
	}
}

const elimina = {
	nombre
}


const argv= require('yargs')
		.command ('crear','Crear un estudiante', creacion)
		.command ('mostrar','Muestra los estudiantes ')
		.command ('mostrarest','Muestra los estudiantes ', muestraest)
		.command ('promedio','Muestra el promedio de un estudiante ', muestraprom)
		.argv;

module.exports={
	argv
};