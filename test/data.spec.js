global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');


// probando la función filtrar, para hombre y para mujer
describe('filterData',() => {
   const data = [
    "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
    "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
    "Inscripción escolar, nivel terciario, mujeres (% bruto)",
    "Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)",
    "Empleadores, mujeres (% del empleo femenino)",
    "Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)"
  ]; 
 it('deberia ser una funcion',() => {
    assert.deepEqual(typeof filterData,'function');
  });
   it('Deberia retornar solo indicadores para Mujeres',() => {
   assert.deepEqual(window.filterData(data,'Mujer'), 
   ["Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
   "Inscripción escolar, nivel terciario, mujeres (% bruto)",
   "Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)",
   "Empleadores, mujeres (% del empleo femenino)"]);

   it('Deberia retornar solo indicadores para Hombres',() => {
    assert.deepEqual(window.filterData(data,'Hombres'), 
    ["Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
    "Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)",
    "Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)"]);
   
    })
  });
}) 

// probando la función calcular
//promedio
describe('sortData',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof sortData,'function');
  });
  it()
});

// probar la función ordenar
describe('sortData',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof sortData,'function');
  });
});