function numeroPar(numeros:number[])  {
    let resultado:boolean
     resultado = false
     let mensaje:string
     mensaje="No hay un numero Par"
     let i:number
     i=0
    do{
        if (numeros[i]%2 == 0){
            mensaje="Hay un numero par"
            resultado=true
        }
        i++
    }
    while(resultado===false && i<numeros.length)
    return console.log (mensaje)
}
numeroPar([1, 1, 3, 11, 5, 11, 7, 15, 2])