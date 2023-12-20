let estudianteHogwarts={
    nombre: "Alegna GrennBlack",
    edad: "11",
    familia: {
        padre: "Lucius Black",
        madre: "Evelyn Green"
    },
    linaje: "Sangre Pura",
    casa: "",
    animalPatronus:"",
    cualidades: ["Ambicion, Determinacion, Astucia"],
};

const boton = document.querySelector("#envio")
console.log(boton);
boton.addEventListener("click",function () {
    const seleccion = document.querySelector(".formulario");
    
    const nombreEstudiante = document.querySelector("#nombre").value
    console.log(`Aca esta ${nombreEstudiante}`);
    console.log(typeof (nombreEstudiante));
    const edadEstudiante = document.querySelector("#edad").value
    const linajeEstudiante = document.querySelector("#linaje").value

    const datos = {
        nombre:nombreEstudiante,
        edad:edadEstudiante,
        linaje:linajeEstudiante
    }


    seleccion.innerHTML = "";

    seleccion.innerHTML = `<body>
    <h3 class="subtitulo_cualidades">Seleccione sus Cualidades para saber su casa</h3>
    <div class="formValores">
        <select name="Cualidades" id="cualidades" class= "cualidades" >
                <option value="Gryffindor">Valor, fuerza, audacia</option>
                <option value="Hufflepuff">Justicia, Lealtad, Paciencia</option>
                <option value="Ravenclaw">Creatividad, Erudiccion, Inteligencia</option>
                <option value="Slytherin">Ambicion, Determinacion, Astucia</option>
                <option value="selecciona" selected hidden>Selecciona una opcion</option>
        </select>
    </div>`

    
} )

const formulValores = document.querySelector("#formValores")
console.log(formulValores);

// formulValores.addEventListener("click", () => {
//     const casa_cualidades = document.querySelector("#cualidades").value
//     estudianteHogwarts.cualidades.push(casa_cualidades)
//     console.log(estudianteHogwarts);
// })



// let formulValores = document.getElementById("formValores")

// formulValores.addEventListener("change", () => {
//     const casa_cualidades = document.querySelector("#cualidades").value
//     estudianteHogwarts.cualidades.push(casa_cualidades)
//     console.log(estudianteHogwarts);
// })

let cena = {
    asignarCasa: function(estudiante, formulValores ) {
        // Determinar la casa según las cualidades y el linaje
        if (estudiante.cualidades.includes("Valor, fuerza, audacia")) {
            estudiante.casa = "Gryffindor";
        } else if (estudiante.cualidades.includes("Justicia, Lealtad, Paciencia") ||
        estudiante.cualidades.includes("Lealtad") ||
        estudiante.cualidades.includes("Paciencia")||
        estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Hufflepuff";
        } else if (estudiante.cualidades.includes("Creatividad, Erudiccion, Inteligencia") ||
        estudiante.cualidades.includes("Erudiccion") || estudiante.cualidades.includes("Inteligencia")||
        estudiante.linaje==="muggle"||estudiante.linaje==="mestizo") {
            estudiante.casa = "Ravenclaw";
        } else if (estudiante.cualidades.includes("Ambicion, Determinacion, Astucia") ||
        estudiante.cualidades.includes("Determinacion") || 
        estudiante.cualidades.includes("Astucia") || 
        estudiante.linaje === "sangre pura") {
            estudiante.casa = "Slytherin";
            this.cenaS;
        } else {
            console.log("No se puede determinar la casa. ¡El Sombrero Seleccionador está confundido!");
        }
    },
    cenaS: function(){
        estudianteHogwarts.casa = this.asignarCasa();
    }

    
};

cena.asignarCasa(estudianteHogwarts)
console.log("casa", estudianteHogwarts.casa)
console.log(`${estudianteHogwarts.nombre} ha sido seleccionado para la casa de ${estudianteHogwarts.casa}.`);

let claseTransformaciones = {
    profesor: clases.transformaciones,
    hora: "9 AM",
    boggartTransformado: null,
    
    realizarTransformacionRiddikulus: function(){
        if(this.boggartTransformado === null){
            console.log("¡un Boggart aparecion en la clase de transformaciones¡¡ ");
            
        }else{
            console.log(`!Riddikulus¡ El boggart se transforma y da risa. Es ahora un ${this.boggartTransformado.formaTransformada}`)
        }
    },
    enfrentarBoggart: function(boggart){
        console.log(`!Un boggart ha aprecido en la clase de Transformaciones¡`);
        console.log(` Forma original del boggart: ${boggart.formaOriginal}`);
        this.boggartTransformado={
            formaOriginal: boggart.formaOriginal,
            formaTransformada: "Payaso gracioso"
        };
        
        this.realizarTransformacionRiddikulus
    }
};
console.log(estudianteHogwarts.nombre)
let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
    
};

let boggartEjemplo = {
    formaOriginal: "Puerco araña"
}

// claseTransformaciones.enfrentarBoggart(boggartEjemplo);

let defensaContraLasArtesOscuras = {
    profesor: clases.defensaContraLasArtesOscuras,
    hora: "10 AM",
    animalPatronus: ["Ciervo", "Aguila", "Dragon", "Fenix", "Tlacuache", "Libelula"],
    generarAnimalPatronus: function(){
        let indiceAleatorio = Math.floor(Math.random() * this.animalPatronus.length);
        return this.animalPatronus[indiceAleatorio];
    }
};

// // Llamada a la función sin argumentos
// estudianteHogwarts.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
// console.log("animal", estudianteHogwarts.animalPatronus);




let clasePociones = {
    profesor: clases.pociones,
    horario: " 10 AM",
    ingredientes: {
        crisopos: 2, 
        talloDescurainiaSophia: 1
    },
    tiempoPreparacion: 5,
    pocionPreparada: false,
    prepararPocion: function (){
        if(this.ingredientes.crisopos ===2 && this.ingredientes.talloDescurainiaSophia===1 && this.tiempoPreparacion === 5 ){
            console.log("!Pocion Felix Felicis Preparada con exito¡");  
            this.pocionPreparada = true;          
        }else{
            console.log("No se pudo preparar la Pocion Felix Felicis");
            this.pocionPreparada =false;
        }
    },

    aplicarConsecuencias: function(){
        if(this.pocionPreparada){
            console.log("La pocion ha tenido efecto");
            console.log("cambiar profesro de pociones por el de animales magicos. ");
            this.profesor =clases.animalesMagicos;
            clases.pociones = this.profesor;
            console.log(`profesor: ${this.profesor}`)
        }else{
            console.log("No se pueden aplicar consecuencias. ")
        }
    },

}

clasePociones.prepararPocion();
clasePociones.aplicarConsecuencias();