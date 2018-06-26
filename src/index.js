//llamados
let string= document.getElementById ("palabraUno");
let stringb= document.getElementById ("palabraDos");
let offset = document.getElementById ("numero");
let button1 = document.getElementById ("encode");
let button2 = document.getElementById ("decode");
let button3 = document.getElementById ("cipherWhitOffset");
let resulText = document.getElementById ("hacker");


button1.addEventListener ("click", event =>{
    let encodeValueClick = window.cipher.encode(
        offset.value, 
        string.value 
    );  

    stringb.innerHTML = encodeValueClick;
}); 

button2.addEventListener ("click", event =>{
    let decodeValueClick = window.cipher.decode(
        offset.value,
        stringb.value
    );
    string.innerHTML = decodeValueClick;
});

button3.addEventListener ("click", event =>{
    let cipherWhitOffset = window.cipher.createCipherWithOffset(
        offset.value
    );
    console.log (cipherWhitOffset);
    resulText.defaultValue = cipherWhitOffset;
  
});