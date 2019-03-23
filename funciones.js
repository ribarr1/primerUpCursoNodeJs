const fs = require ('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
	listar();
	let est = {
		nombre: estudiante.nombre,
		matematicas: estudiante.matematicas,
		ingles: estudiante.ingles,
		programacion: estudiante.programacion
	};

	let duplicado = listaEstudiantes.find(nom=>nom.nombre == estudiante.nombre);
	if(!duplicado){
		listaEstudiantes.push(est);
		console.log(listaEstudiantes);
		guardar();
	}
	else
		console.log('Ya existe otro estudiante con ese nomrbe');
}

const listar = () => {
	try{
	listaEstudiantes = require('./listado.json');
	} catch(error){
		listaEstudiantes=[];
	}

	//cuando el archivo varia de forma asincronica
	//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err)=>{
if (err) throw (err);
console.log('Archivo creado con exito')

	})
}

const mostrar = () =>{
	listar()
	console.log ('Notas de los estudiantes ')
	listaEstudiantes.forEach(estudiante => {
		console.log (estudiante.nombre);
		console.log ('notas')
		console.log(' Matematicas ' + estudiante.matematicas)
		console.log(' Ingles ' + estudiante.ingles)
		console.log(' Programacion ' + estudiante.programacion + '\n')

	});

}

const mostrarest = (nom) =>{
	listar()
	
	let est = listaEstudiantes.find(buscar=>buscar.nombre == nom);
	if(!est){
		
		console.log('no existe ese estudiante');
		
	}
	else{
		console.log (est.nombre);
		console.log ('notas')
		console.log(' Matematicas ' + est.matematicas)
		console.log(' Ingles ' + est.ingles)
		console.log(' Programacion ' + est.programacion + '\n')
     }
}

const mostrarmat = () =>{
	listar()
	let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
	if(ganan.length == 0){
		console.log('ninguno saco mas de 3')
	}else{
		ganan.forEach(estudiante => {
		console.log (estudiante.nombre);
		console.log ('notas')
		console.log(' Matematicas ' + estudiante.matematicas)
		

	});

	}
}

const mostrarpromtop = () =>{
	listar()
	let ganan = listaEstudiantes.filter(mat => (mat.matematicas+mat.ingles+mat.programacion)/3 >= 3);
	if(ganan.length == 0){
		console.log('ninguno saco un promedio por encima de 3')
	}else{
		ganan.forEach(estudiante => {
		console.log (estudiante.nombre);
		console.log ('Promedio de estudiantes Top')
		console.log(' Promedio ' + (estudiante.matematicas+estudiante.ingles+estudiante.programacion)/3)
		

	});

	}
}

const promedio = (nom) =>{
	listar()
	let est = listaEstudiantes.find(buscar=>buscar.nombre == nom);
	if(!est){
		
		console.log('no existe ese estudiante');
		
	}
	else{
		console.log (est.nombre);
		console.log ('Promedio')
		console.log(' Matematicas ' + est.matematicas)
		console.log(' Ingles ' + est.ingles)
		console.log(' Programacion ' + est.programacion )
		console.log(' El promedio es: ' + (est.programacion+est.matematicas+est.ingles)/3 + '\n\n')
     }
}


module.exports = {
	crear,
	mostrar,
	mostrarest,
	mostrarmat,
	promedio,
	mostrarpromtop
}