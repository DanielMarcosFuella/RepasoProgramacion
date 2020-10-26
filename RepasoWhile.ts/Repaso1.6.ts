function numeroPar(numeros:number[]) {
    let resultado:string
    let i=0
    while (numeros[i-1]%2 != 0 && i < numeros.length){
        if (numeros[i]%2 !=0){
            resultado="No hay numero par"
        }
        else{
            resultado = "Hay un numero par"
        }
    
        i++
    }
    return console.log (resultado)
}
numeroPar([1, 1, 3, 11, 5, 11, 7, 15, 9, 2])

