function arcoiris(colores:string[]) {
    let colorArcoiris:string[]
    colorArcoiris=["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Indigo", "Violeta"]
    for (let i=0;i<colores.length;i++){
        if (colorArcoiris.includes(colores[i])){
            console.log (colores[i] + " Forma parte del Arcoiris")
        }   
        else{
            console.log(colores[i] + " No forma parte del Arcoiris")
        }
    }
}
arcoiris(["Rojo", "Morado", "Amarillo", "Marrón"])