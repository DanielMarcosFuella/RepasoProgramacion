function continente(pais:string) {
        if (pais=="españa" || pais=="Albania" || pais=="Bulgaria" || pais=="Alemania" || pais=="Dinamarca"){
            console.log ("Europa")
        }
        else if(pais=="Cuba" || pais=="Argentina" || pais=="EEUU"|| pais=="Colombia"|| pais=="Brasil"){
            console.log ("America")
        }
        else if(pais=="Australia" || pais=="Samoa" || pais=="Micronesia" || pais=="Fiyi" || pais=="Tonga"){
            console.log("Oceania")
        }
        else if (pais=="Togo"|| pais=="Zimbabue" || pais=="Somalia" || pais=="Nigeria" || pais=="Marruecos"){
            console.log("Africa")
        }
        else if (pais=="China"|| pais=="Japon" || pais=="Korea" || pais=="Tailandia" || pais=="Indonesia"){
            console.log("Asia")
        }
}

continente("Micronesia")