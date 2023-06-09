function suma():void{
    console.log(3+6);
}

function suma2(a:number,b:number):number{
    return (a+b);
}

function multiplicar(n1:number,otronumero:number,nuevonumero:number){
    let tem=n1*nuevonumero
    return tem;
}

function sumar3(a:number,b:number){

    return `${a+b}`
}


interface Mascota{
nombre:String;
edad:number;
mostrarEdad:()=>void
;
}


function calcular(mascota:Mascota,x:number){
mascota.edad+=x;
console.log(mascota)
}

const nuevaMascota:Mascota={
    nombre:'Juan',
    edad:3,
    mostrarEdad(){
        console.log('la edad es: ' ,this.edad);
    }
}

//calcular(nuevaMascota,5)



//console.log(multiplicar(3,0,9));
//console.log(
//suma2(3,3));



const funcSumar = function(valor1:number,valor2:number):number{
    return valor1+valor2;
}
//console.log(funcSumar(5,5));

function calcular2(n1:number,n2:number,n3?:number):number{
    if(n3)
    return n1+n2+n3;
    else
    return n1+n2

}

console.log(calcular2(3,2,5));
console.log(calcular2(3,2))