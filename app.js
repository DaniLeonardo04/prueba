

let persona1 ={

        nombre:'Martha',
        edad:46,
}

let persona2 = {

        nombre:'Leonardo',
        edad:15,
}

let persona3 = {

        nombre:'Felipe',
        edad:21,
}

let persona4 = {

        nombre:'Miguel',
        edad:45,
}

let personas = [ persona1, persona2 , persona3, persona4 ]
 

for (let i = 0; i < personas.length; i++) {     
       
        console.log( ` ${personas[i].nombre} --- ${personas[i].edad} ` );
    
}
 

