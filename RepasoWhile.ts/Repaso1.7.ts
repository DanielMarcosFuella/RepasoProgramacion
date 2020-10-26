function nombresConM(nombres:string[]) {
    let resultado:boolean
    resultado=true
    let i:number
    i=0
    do {
        if (nombres[i][0]!="M"){
            resultado=false
        }
        i++
    }
    while(resultado && i<nombres.length)
    return resultado
}
console.log (nombresConM(["Manolo", "Maco", "Maria del Carmen"]))