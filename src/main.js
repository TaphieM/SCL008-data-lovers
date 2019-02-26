/* Manejo del DOM */
/* agrega elementos a los listados*/
//Paises
let Countries = GenerateList(WORLDBANK);
let OpcionesPaises="";
Countries.forEach(element => {
    OpcionesPaises = OpcionesPaises + "<option id='"+ element + "'>'" + element+ "'</option>";
});

document.getElementById("idCountries").innerHTML = OpcionesPaises;
//indicadores

let Indicators = GenerateSubList(WORLDBANK[Countries[0]].indicators,"indicatorName");
Indicators.sort();
let OpcionesIndicators="";
Indicators.forEach(element => {
    OpcionesIndicators = OpcionesIndicators + "<option id='"+ element + "'>'" + element+ "'</option>";
});

document.getElementById("idIndicators").innerHTML = OpcionesIndicators;

//
let Indicators1 = GenerateSubList(WORLDBANK[Countries[1]].indicators,"indicatorName");
Indicators1.sort();
let OpcionesIndicators1="";
Indicators1.forEach(element => {
    OpcionesIndicators1 = OpcionesIndicators1 + "<option id='"+ element + "'>'" + element+ "'</option>";
});

document.getElementById("idIndicators1").innerHTML = OpcionesIndicators1;