//Función que siempre devuelve true
+function Verdadero(){
    return true;
}

//Función asincrona que devuelve un texto luego de 5 segundos.
function soyPromesa(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve();
        }, 5000);
    })
}

soyPromesa()
    .then(()=> {console.log("Hola, soy una promesa")})
    .finally();

function* generaPares(){
    let i=0;
    while(true){
        i+=2
        yield i
    }
}

const gen = generaPares();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);