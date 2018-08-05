// el naegador tendra el comportamiento de cipher
window.cipher = {

  // funcion codificar
  encode: (offset, string) => {
    // variable para resultado final
    let result = '';
    // creamos un for que codificara cada letra del string                    
    for (let i = 0; i < string.length; i++) {
      // variable que cotiene el valor de cada letra en ASCII
      let x = string[i].charCodeAt();
      // variable que para el resultado de la formula.
      let formula;
      if (x >= 65 && x <= 90) {
        // MAYUSCULAS  
        formula = (x - 65 + parseInt(offset)) % 26 + 65;
      } else if (x >= 97 && x <= 122) {
        // minusculas
        formula = (x - 97 + parseInt(offset)) % 26 + 97;
      } else {
        // signos y espacio no se codifican
        formula = x;
      }
      // Acumulador de resultado.
      result += String.fromCharCode(formula);
      // console.log(result);          
    }
    // salida de la funcion devolviendo result           
    return result;
  },

  // Funcion decodificar   
  decode: (offset, string) => {
    // variable para resultado final
    let result = '';
    // creamos un for que codificara cada letra del string
    for (let i = 0; i < string.length; i++) {
      // variable que cotiene el valor de cada letra en ASCII
      let x = string[i].charCodeAt();
      // variable que para el resultado de la formula.
      let formula;
      if (x >= 65 && x <= 90) {
        // MAYUSCULAS                                            
        formula = (x - 90 - parseInt(offset)) % 26 + 90;
      } else if (x >= 97 && x <= 122) {
        // minusculas
        formula = (x - 122 - parseInt(offset)) % 26 + 122;
      } else {
        // espacio y signos no se decodifican
        formula = x;
      }
      // acumulador de resultado
      result += String.fromCharCode(formula);
      // console.log(result);
    }
    // salida de la funcion devolviendo result     
    return result;
  },


  // hacker edition
  createCipherWithOffset: (offset) => {
    // variables que seran propiedades del objeto a devolver
    let codifica;
    let decodifica;
    // variables que contienen las fraces a codificar y decodificar 
    let string = document.getElementById('palabraUno');
    let stringB = document.getElementById('palabraDos');

    // retornamos un objeto con dos funciones encode y decode (que tomamos de el objeto cipher)
    // los cuales resiven el string y usan el offset de la funcion padre. 
    return objetoCipher = {
      codifica: window.cipher.encode(offset, string.value),
      decodifica: window.cipher.decode(offset, stringB.value)
    };
  },

};
