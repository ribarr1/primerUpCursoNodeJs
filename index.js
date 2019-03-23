const { argv } = require('./yargs');
const funciones = require('./funciones');

//solo para mostrar lo que trae argv
//console.log(argv);
//console.log(' posicion 0 ' + argv._[0])

let comando = argv._[0];

switch (comando){

	case 'crear':
	funciones.crear(argv);
	break

	case 'mostrar':
	funciones.mostrar();
	break

	case 'mostrarest':
	funciones.mostrarest(argv.nombre);
	break

	case 'mostrarmat':
	funciones.mostrarmat();
	break

	case 'promedio':
	funciones.promedio(argv.nombre);
	break

	case 'mostrarpromtop':
	funciones.mostrarpromtop();
	break

	default:
	console.log('no ingreso un comando valido')
}

