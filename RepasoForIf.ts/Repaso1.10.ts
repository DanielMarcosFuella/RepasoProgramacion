function sumaDeCaracteres(palabras:string[]) {
    let resultado:number
    resultado=0
    for (let i=0;i<palabras.length;i++){
        resultado+= palabras[i].length
    }
    return resultado
}
function numeroPar(numero:number) {
    if (numero%2==0){
        console.log("El numero es par")
    }
    else {
        console.log("El numero es impar")
    }
}
numeroPar(sumaDeCaracteres(["casa", "coche", "ciudad", "cesta"]))
numeroPar(sumaDeCaracteres(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]))
numeroPar(sumaDeCaracteres(["Venezuela", "Veneno", "Voltaje"]))