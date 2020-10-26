function signo(dia:Number, mes:Number) {
    let signoDelZodiaco:string
    if (mes==1){
        if (dia <= 19){
            signoDelZodiaco="capricornio"
        }
        else{
            signoDelZodiaco="acuario"
        }
    }
    else if (mes==2){
        if (dia<=18){
            signoDelZodiaco="acuario"
        }
        else{
            signoDelZodiaco="Piscis"
        }
    }
    else if (mes==3){
        if (dia<=20){
            signoDelZodiaco="Piscis"
        }
        else{
            signoDelZodiaco="Aries"
        }
    }
    else if (mes==4){
        if (dia<=20){
            signoDelZodiaco="Aries"
        }
        else{
            signoDelZodiaco="Tauro"
        }
    }
    else if (mes==5){
        if (dia<=20){
            signoDelZodiaco="Tauro"
        }
        else{
            signoDelZodiaco="Géminis"
        }
    }
    else if (mes==6){
        if (dia<=20){
            signoDelZodiaco="Géminis"
        }
        else{
            signoDelZodiaco="Cáncer"
        }
    }
    else if (mes==7){
        if (dia<=20){
            signoDelZodiaco="Cáncer"
        }
        else{
            signoDelZodiaco="Leo"
        }
    }
    else if (mes==8){
        if (dia<=21){
            signoDelZodiaco="Leo"
        }
        else{
            signoDelZodiaco="Virgo"
        }
    }
    else if (mes==9){
        if (dia<=22){
            signoDelZodiaco="Virgo"
        }
        else{
            signoDelZodiaco="Libra"
        }
    }
    else if (mes==10){
        if (dia<=22){
            signoDelZodiaco="Libra"
        }
        else{
            signoDelZodiaco="Escorpio"
        }
    }
    else if (mes==11){
        if (dia<=22){
            signoDelZodiaco="Escorpio"
        }
        else{
            signoDelZodiaco="Sagitario"
        }
    }
    else if (mes==12){
        if (dia<=20){
            signoDelZodiaco="Sagitario"
        }
        else{
            signoDelZodiaco="Capricornio"
        }
    }
    return signoDelZodiaco
}

console.log (signo(21,6))