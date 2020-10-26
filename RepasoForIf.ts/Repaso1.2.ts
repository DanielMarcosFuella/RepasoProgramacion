let Europa: String[]
let America: String[]
let Oceania: String[]
let Africa: String[]
let Asia: String[]
Europa=["España", "Albania", "Bulgaria", "Alemania", "Dianamarca"]
America=["Cuba", "Argentina", "EEUU", "Colombia", "Brasil"]
Oceania=["Australia", "Samoa", "Micronesia", "Fiyi", "Tonga"]
Africa=["Togo", "Zimbabue", "Somalia", "Nigeria", "Marruecos"]
Asia=["Mongolia", "Siria", "Yemen", "China", "Catar"]

function continente(pais:string) {
    for (let i=0; i<Europa.length; i++){
        if (pais===Europa[i]){
            console.log ("Europa")
        }
        else if(pais===America[i]){
            console.log ("America")
        }
        else if(pais===Oceania[i]){
            console.log("Oceania")
        }
        else if (pais===Africa[i]){
            console.log("Africa")
        }
        else if (pais===Asia[i]){
            console.log("Asia")
        }
    }
}

continente("Micronesia")