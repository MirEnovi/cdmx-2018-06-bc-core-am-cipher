//el naegador tendra el comportamiento de cipher
window.cipher = {
    offset: 1,
    string:"",

    //funcion codificar
    encode : (offset, string) => {
        //variable para resultado final
        let  result = "";
        // console.log(offset, string);
                                                                                                              
        // creamos un for que codificara cada letra del string                                                                                                
        for (let i=0; i<string.length; i++){
            //Creamos dos variables, x para el numero ASCII de la letra
            //y variable formula para la conversion
            let x = string[i].charCodeAt();
            let formula;
           
            if (x>=65 && x<=90) {
                //MAYUSCULAS  
                formula = (x-65 + parseInt(offset)) % 26 + 65;
                               
            } else if (x>=97 && x<=122) {
                 //minusculas
                formula = (x-97 + parseInt(offset)) % 26 + 97;

            } else {
                // signos y espacio no se codifican
                formula = x;
            }
        //Acumulador de resultado.
        result += String.fromCharCode (formula); 
        // console.log(result);          
        }
        //salida de la funcion devolviendo result           
        return result;
    },

    //Funcion decodificar   
    decode : (offset, stringb) => {
        //variable para resultado final
        let  result = "";
        // console.log(offset, stringb);
        
        // creamos un for que codificara cada letra del string
        for (let i=0; i<stringb.length; i++){
            //Creamos dos variables, x para el numero ASCII de la letra
            //y variable formula para la conversion        
            let x = stringb[i].charCodeAt();          
            let formula;
            
            if (x>=65 && x<=90) {
                // MAYUSCULAS                                            
                formula = (x-90 - parseInt(offset)) % 26 + 90;
                
            } else if (x>=97 && x<=122) {
                //minusculas
                formula = x-122 - (parseInt(offset) % 26 )+ 122;
                
            } else {
                //espacio y signos no se decodifican
                formula = x;
            }
            //acumulador de resultado
            result += String.fromCharCode (formula);
            // console.log(result);
        }
        //salida de la funcion devolviendo result     
        return result
    },

    /*
    createCipherWithOffset : (offset) => {

        return
        cipher.encode (string),
        cipher.decode (string)
    },*/

    //hacker edition
    createCipherWithOffset : (offset) =>  {
        //variables que seran propiedades del objeto a devolver
        let codifica;
        let decodifica;
        //variables que contienen las fraces a codificar y decodificar 
        let string = document.getElementById("palabraUno");
        let stringb = document.getElementById("palabraDos");
        
        //retornamos un objeto con dos funciones encode y decode (que tomamos de el objeto cipher)
        //los cuales resiven el string y usan el offset de la funcion padre. 
       return objetoCipher = {
            codifica: window.cipher.encode(offset, string.value),

            decodifica: window.cipher.decode(offset, stringb.value)
        };

    },

};