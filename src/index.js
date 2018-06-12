//llamados
let string= document.getElementById ("palabraUno");
let stringb= document.getElementById ("palabraDos");
let offset = document.getElementById ("numero");
let button1 = document.getElementById ("encode");
let button2 = document.getElementById ("decode");


button1.addEventListener ("click", event =>{
    let encodeValueClick = window.cipher.encode(
        offset.value, 
        string.value 
    );  
    
}); 

button2.addEventListener ("click", event =>{
    let encodeValueClick2 = window.cipher.decode(
        offset.value, 
        stringb.value 
    );  
    
}); 


// button2.addEventListener ("click", "decode()");


