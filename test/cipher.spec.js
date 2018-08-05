describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });  

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(
        cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG'
      );
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () =>{
      assert.equal(
        cipher.decode(1, 'ipmb'), 'hola');
    });
  });

  describe('cipher.createCipherWithOffset', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      // const processed = cipher.createCipherWithOffset(offset);
      // processed.Object.keys((cipher.createCipherWithOffset(offset).objetoCipher) => {
      //   assert.ok(objetoCipher.hasOwnProperty('codifica'));
      //   assert.ok(objetoCipher.hasOwnProperty('decodifica'));
    });
  });
});
// });

// it('debería retornar arreglo de students con propiedad campus y propiedad generation', () => {
//   const processed = computeStudentsStats(laboratoria);

//   processed.forEach((student) => {
//     assert.ok(student.hasOwnProperty('campus'));
//     assert.ok(student.hasOwnProperty('generation'));
//   });
// });