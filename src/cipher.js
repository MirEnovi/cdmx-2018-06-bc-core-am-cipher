//el naegador tendra el comportamiento de cipher
window.cipher = {
    offset: 33,
    encode : (offset, string) => {
        let  result = "";
        for (let i=0; i<string.length; i++){
            console.log(offset, string);
            let x = string[i].charCodeAt();
            console.log ("letra en ASCII (x)= " + x)
            let formula;
            if (x==32) {
                formula = 32; 
             //MAYUSCULAS   
            } else if (x>=65 && x<=90) {
                console.log("formula= (x-65 + parseInt(offset)) % 26 + 65");
                console.log ("letra en ASCII (x)= " + x);
                console.log ("offset =" + parseInt(offset));
                formula = (x-65 + parseInt(offset)) % 26 + 65;
                console.log("formula="+ formula + "\n");

                //minusculas
            } else if (x>=97 && x<=122) {
                console.log("formula= (x-97 + parseInt(offset)) % 26 + 97");
                console.log ("letra en ASCII (x)= " + x);
                console.log ("offset =" + parseInt(offset));
                formula = (x-97 + parseInt(offset)) % 26 + 97;
                console.log("formula="+ formula + "\n");
            } else {
                formula = x;
            }
        
        result += String.fromCharCode (formula);
        console.log("resulta = " + result);            
        }
                    
        stringb.defaultValue =  result;
        
        return 

    },
   
    decode : (offset, stringb) => {
        let  result = "";
        console.log(offset, stringb);
        
        for (let i=0; i<stringb.length; i++){
            //x es el numero de letra en codigo Ascii
            let x = stringb[i].charCodeAt();          
            //variable formula
            let formula;
            if (x==32) {
                formula = 32;
                console.log("formula="+ formula + "\n");
             //MAYUSCULAS   
            } else if (x>=65 && x<=90) {
                console.log("formula= (x-65 - parseInt(offset)) % 26 + 65");
                console.log ("letra en ASCII (x)= " + x);
                console.log ("offset =" + parseInt(offset));
                formula = (x-65 - parseInt(offset)) % 26 + 65;
                console.log("formula="+ formula + "\n");

                //minusculas
            } else if (x>=97 && x<=122) {
                console.log("formula= (x-97 - parseInt(offset)) % 26 + 97");
                console.log ("letra en ASCII (x)= " + x);
                console.log ("offset =" + parseInt(offset));
                formula = (x-97 - parseInt(offset)) % 26 + 97;
                console.log("formula="+ formula + "\n");
            } else {
                formula = x;
            }
            result += String.fromCharCode (formula);
            console.log(result);
        
        }
        string.innerHTML =  result;
        
        return 
    }
   

};