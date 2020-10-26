function sumaDeCaracteres(palabras:string[]) {
    let resultado:number
    resultado=0
    for (let i=0;i<palabras.length;i++){
        resultado+= palabras[i].length
    }
    return resultado
}
console.log (sumaDeCaracteres(["hola", "hola", "hola"]))