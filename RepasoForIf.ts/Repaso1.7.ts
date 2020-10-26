function nombresConM(nombres:string[]) {
    let resultado:Boolean
    resultado=true
    for (let i=0; i<nombres.length;i++){
        if (nombres[i][0] != "M"){
            resultado=false
        }
    }
    return resultado
}
console.log (nombresConM(["Manolo", "Maco", "Maria del Carmen"]))