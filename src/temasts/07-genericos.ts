class pilaEnteros{
    private  vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
        else 
        return null;
    }
}

class pilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
        else 
        return null;
    }
}

let pila1 = new pilaEnteros();
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer());


let pila2 = new pilaString();
pila2.insertar('23')
pila2.insertar('28')
pila2.insertar('2')
console.log(pila2.extraer());

// clase genericas
class pilaGenericas<T>{
    private vec:T[]=[]
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
        else
        return null;
    }
} 

let pila3 = new pilaGenericas<number>;
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer());


let pila4 = new pilaGenericas<String>();
pila2.insertar('23')
pila2.insertar('28')
pila2.insertar('2')
console.log(pila2.extraer());