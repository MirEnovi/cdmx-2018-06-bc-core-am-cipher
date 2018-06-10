//el naegador tendra el comportamiento de cipher
window.cipher = {

};
//variables para    imprimir mensaje cifrado
 let strCodificadoR = document.getElementById ("palabraDos");
 let strDecodificadoR = document.getElementById ("palabraUno");
 
function codificar() {
    //variable pata obtener mensaje sin codificar
    let strDecodificado = document.getElementById ("palabraUno").value.toLowerCase();
    //Cambiar todo a minusculas
    //strDecodificado.toLowerCase();
    //variable para obtener numero para codificar
    let numC = parseInt(document.getElementById("numero").value);
    console.log("NUMERO " + numC%26); 
       //se declara la variable que arrojara el resultado con un string vacio
       let  res = "";
       //variable para formula para sacar el numero que debe de recorrerse
       let xDecod;
    for (let i=0; i<strDecodificado.length; i++){
        //variable para obtener el numero de posicion de la letra
        let x = strDecodificado[i];
        //para guardar en x el numero ASCII que corresponde
        x= x.charCodeAt(); 
              
        if (x==32) {
            xDecod = 32;          
        }
        else {
            //Formula para sacar el numero que debe de recorrerse
            xDecod = (x-97 + numC) % 26 + 97;  
            
        }
        //para guardar la letra nueva codificada con un contador que aumenta el resultado
        res += String.fromCharCode (xDecod);
        //corroborar en consola
        
        console.log(res);  
             
    }
    // defaultValue me ayuda a cambiar el valor de un input
    let res1 = res[0].toUpperCase()
    strCodificadoR.defaultValue = res1 + res.slice(1,res.length);
        
}

function deCodificar() {
    //variable pata obtener mensaje sin codificar
    let strCodificado = document.getElementById ("palabraDos").value.toLowerCase();
    //variable para obtener numero para codificar
    let numC = parseInt(document.getElementById("numero").value);
    console.log(numC%26);
       //se declara la variable que arrojara el resultado con un string vacio
       let  res = "";
       //variable para formula para sacar el numero que debe de recorrerse
       let xDecod;
     for (let i=0; i<strCodificado.length; i++){
        //Cambiar todo a minusculas
        //strCodificado.toLowerCase();
        //variable para obtener el numero de posicion de la letra
        let x = strCodificado[i];
        //para guardar en x el numero ASCII que corresponde
        x= x.charCodeAt();        
        if (x==32) {
            xDecod = 32;          
        }
        else {
            //Formula para sacar el numero que debe de recorrerse  AQUI ESTA LA PAPA
            xDecod = (x-97 - numC) % 26 + 97;  
            
        }
        //para guardar la letra nueva codificada con un contador que aumenta el resultado
        res += String.fromCharCode (xDecod);
        //corroborar en consola
        console.log(res);  
             
    }
    // defaultValue me ayuda a cambiar el valor de un input
    let res1= res[0].toUpperCase()
    strDecodificadoR.defaultValue = res1 + res.slice(1,res.length) ;        
}

