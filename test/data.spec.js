global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');


// probando la función filtrar, para hombre y para mujer
describe('filterData',() => {
  const data = ["Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
  "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
  "Inscripción escolar, nivel terciario, mujeres (% bruto)",
  "Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)",
  "Empleadores, mujeres (% del empleo femenino)",
  "Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)"]; 
it('deberia ser una funcion',() => {
   assert.deepEqual(typeof filterData,'function');
 });
  it('Deberia retornar solo indicadores para Mujeres',() => {
  assert.deepEqual(window.filterData(data,'Mujer'),["Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
  "Inscripción escolar, nivel terciario, mujeres (% bruto)","Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)",
  "Empleadores, mujeres (% del empleo femenino)"]);

  it('Deberia retornar solo indicadores para Hombres',() => {
   assert.deepEqual(window.filterData(data,'Hombres'),["Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
   "Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)",
   "Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)"]);
  
   });
 });
}); 

// probando la función calcular
 // Para comprobar la función computeMean,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
 describe('computeMean', () => {
  //que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
  // se prueba que es una función
  assert.equal(typeof computeMean, "function");
});
//se prueb una función con un array
it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 58.5', () => {
  assert.equal(window.computeMean([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 58.5);
});
});

// Para comprobar la función computeMax,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
describe('computeMax', () => {
//que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
// se prueba que es una función
assert.equal(typeof computeMax, "function");
});
//se prueb una función con un array
it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 98', () => {
assert.equal(window.computeMax([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 98);
});
});

// Para comprobar la función computeMin,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
describe('computeMin', () => {
//que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
// se prueba que es una función
assert.equal(typeof computeMin, "function");
});
//se prueb una función con un array
it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 21', () => {
assert.equal(window.computeMin([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 21);
});
});

// Para comprobar la función computeMedian,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
describe('computeMedian', () => {
//que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
// se prueba que es una función
assert.equal(typeof computeMedian, "function");
});
//se prueb una función con un array
it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 57.5', () => {
assert.equal(window.computeMedian([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 57.5);
});
});

// probar la función ordenar

describe('sortData',() => {
  const data = [["vale",32,23],
                ["manu",78,65],
                ["andre",36,45]]; 
  
  it('deberia ser una funcion',() => {
    assert.equal(typeof sortData,'function');
  });
  it("debe ordenar alfabeticamente arrays por la columna 0 ( de strings )por descendente",() => {
    assert.deepEqual(window.sortData(data,0,"desc"),
    [["andre",36,45],["manu",78,65],["vale",32,23]]);
  });
  it("debe ordenar alfabeticamente arrays por la columna 0 ( de strings )por ascendente",() => {
    assert.deepEqual(window.sortData(data,0,"asc"),
    [["vale",32,23],["manu",78,65],["andre",36,45]]);
  });

});
