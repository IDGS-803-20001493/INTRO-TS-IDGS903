// desestructuracion de objetos y arreglos
interface Alumno1{
    matricula:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}



const alumno2:Alumno1={
    matricula:12345,
    nombre:'mario',
    edad:23,
    correo:'ejemplo@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023,
    }
}

console.log(`La matricula es:  ${alumno2.matricula}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)

const{matricula,nombre:nom,grupo:XX}=alumno2
const{grupo,year:anio}=XX

console.log(`La matricula es:  ${matricula}`)
console.log(`El nombre es: ${nom}`)
console.log(`El año del grupo es: ${anio}`)
console.log(`El grupo es: ${grupo}`)


// desestructuracion de arreglos
const gps:string[]=['IDGS','IEVN','REDES'];

console.log(`grupo 1:${gps[0]}`)
console.log(`grupo 2:${gps[1]}`)
console.log(`grupo 3:${gps[2]}`)

const[a,,b]=gps;
console.log(`grupo 1: ${a}`)