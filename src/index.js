// llamados 
const container = document.getElementById('content');
const containerResult = document.getElementById('result');
const reload = document.getElementById('reload');


// creacion de elementos para mensaje a cifrar
const descripcionCipher = document.createElement('label');
descripcionCipher.innerHTML = '<h6>Ingresa aqui tu mensaje original</h6>';
descripcionCipher.className = 'brown-text text-darken-2';

const string = document.createElement('input');
string.id = 'text-cipher';
string.className = 'brown-text text-lighten-3';
string.type = 'text';
string.placeholder = 'Mensaje Original';

// creacion de elementos para mensaje a decifrar
const descripcionDecipher = document.createElement('label');
descripcionDecipher.innerHTML = '<h6>Ingresa aqui tu mensaje cifrado</h6>';
descripcionDecipher.className = 'brown-text text-darken-2';

const stringB = document.createElement('input');
stringB.id = 'text-decipher';
stringB.className = 'brown-text text-lighten-3';
stringB.type = 'text';
stringB.placeholder = 'Mensaje Decifrado';

// creacion de elementos para clave secreta
const descripcionOffset = document.createElement('label');

const iconOffset = document.createElement('i');
iconOffset.className = 'material-icons';
iconOffset.innerHTML = 'enhanced_encryption <h6>Clave numerica secreta</h6>';
descripcionOffset.appendChild(iconOffset);

// descripcionOffset.innerHTML = '<h6>Ingresa aqui tu clave numerica secreta</h6>';
descripcionOffset.className = 'brown-text text-darken-2';

const offset = document.createElement('input');
offset.id = 'offset';
offset.className = 'brown-text text-lighten-3';
offset.type = 'number';

// creacion de elementos para botones cifrar y decifrar
// const button1 = document.createElement('button');
// button1.innerHTML = 'Cifrar';
// button1.style = 'font-weight: bold';
// button1.className = 'btn light-blue lighten-3 brown-text col s5 m4 offset-s1 offset-m3';
// const button2 = document.createElement('button');
// button2.innerHTML = 'Deifrar';
// button2.style = 'font-weight: bold';
// button2.className = 'btn light-blue lighten-3 brown-text col s5 m4 offset-s1 offset-m1';
// const containerButtons = document.createElement('div');
// containerButtons.className = 'row';

// Agregando elementos a div container
containerButtons.appendChild(button1);
containerButtons.appendChild(button2);

container.appendChild(descripcionCipher);
container.appendChild(string);

container.appendChild(descripcionDecipher);
container.appendChild(stringB);

container.appendChild(descripcionOffset);
container.appendChild(offset);

container.appendChild(containerButtons);

// let string = document.getElementById('palabraUno');
// let stringb = document.getElementById('palabraDos');
// let offset = document.getElementById('numero');
// let button1 = document.getElementById('encode');
// let button2 = document.getElementById('decode');
// let button3 = document.getElementById('cipherWhitOffset');
// let resulText = document.getElementById('hacker');

// funcion para llamar a cipher.ecode
const encodeClick = () => {
  const resultEncode = window.cipher.encode(
    offset.value,
    string.value
  );
  console.log(resultEncode);

  containerResult.innerHTML = resultEncode;
};

// funcion para llamar a cipher.decode
const decodeClick = () => {
  const resultDecode = window.cipher.decode(
    offset.value,
    stringB.value
  );
  containerResult.innerHTML = resultDecode;
};

// funcion recargar la pagina
const reloadpage = () => {
  location.href = ('index.html');
};

// Eventos de botones
button1.addEventListener('click', encodeClick);
button2.addEventListener('click', decodeClick);
reload.addEventListener('click', reloadpage);

