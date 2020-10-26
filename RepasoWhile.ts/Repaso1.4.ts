function reverse(array:string[]) {
    
    let solucion:String[]
    solucion=[]
    while (array.length){
        solucion.push(array.pop())
    }
    return solucion
}
console.log (reverse(["uno", "dos", "tres"]))