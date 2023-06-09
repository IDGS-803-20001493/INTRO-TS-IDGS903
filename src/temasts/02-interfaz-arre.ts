interface Alumno{
    matricula:number,
    nombre:string,
    email:string
}

const alumno={

    nombre:'Armando',
    matricula:12345,
    email:'email@gmail.com'
}

let mascotas =['perro', 'gato', 'perico']
mascotas[1]='shhh'
mascotas.push()


let tem:(number|string)[]=[]
tem.push('nombre')
tem.push(224)


console.log(tem);
console.log(mascotas);
console.log(alumno);

