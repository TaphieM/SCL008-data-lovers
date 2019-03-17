//variables globales

let actualCountry;//el pais seleccionado por el usuario
let actualGender;//sexo seleccionado por el usuario 
let actualIndicator;//el indicador seleccionado por el usuario

// define variables para los objetos de html
            //listados
const selectCountry=document.getElementById("selectCountry");
const selectGender=document.getElementById("selectGender");
const selectIndicators=document.getElementById("selectIndicators");

             //botones
const navIndex=document.getElementById("navIndex");
const navDefinition=document.getElementById("navDefinition");
const navIndicators=document.getElementById("navIndicators");
const btOrderListAsc =document.getElementById("btOrderListAsc");
const btOrderListDesc =document.getElementById("btOrderListDesc");
const nextButton=document.getElementById("next-button");
const indicatorButton=document.getElementById("indicator-button");
const statsButton=document.getElementById("average-button");
const btOrderTableAsc=document.getElementById("btOrderTableAsc");
const btOrderTableDesc=document.getElementById("btOrderTableDesc");
const graphicButton=document.getElementById("curve_chart");



            //secciones
const sectIndex=document.getElementById("index");
const sectDefinition=document.getElementById("definition");
const sectIndicators=document.getElementById("indicators");
const sectselectionScreen=document.getElementById("selectionScreen");
const sectShowDataScreen=document.getElementById("showDataScreen");
const sectTableScreen=document.getElementById("tableScreen");



//// funciones



// Función que llena el <selec> identificado con el id indicado como parametro, con los elementos del array list
//Crea la lista desplegable de indicadores
const fillList = (list,id) =>{
    let htmlcodes="";
    list.forEach(element => {
        htmlcodes = htmlcodes+ "<option id="+ element + ">" + element+ "</option>";
    })
    document.getElementById(id).innerHTML = htmlcodes;
    }
    
   
//Actualiza los valores que el usuario seleccionó
const updateSelection=()=>{
    actualCountry = selectCountry.options[selectCountry.selectedIndex].value;
    actualGender = selectGender.options[selectGender.selectedIndex].value;
    try {
        actualIndicator = selectIndicators.options[selectIndicators.selectedIndex].value;
    }
    catch (error) {
        return error;
    }
}
// Actualiza el listado de indicadores de acuerdo a la selección del usuario 
// Actualiza el listado de indicadores de acuerdo a la selección de país y genero 
const updateIndicators=()=>{
    let Indicators = window.GenerateSubList(window.WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators.sort();
    Indicators=window.filterData(Indicators,actualGender);
/*     if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);} */
    fillList(Indicators,"selectIndicators");
}
//Genera el codigo html para llenar la tabla con la data, llena la tabla con los datos de data (año e indicador)
const fillTable =(arr)=>{
    let htmlCode=   "<tr>"+
                        "<th>Año</th>"+
                        "<th>Indicador</th>"+
                    "</tr>";
    arr.forEach(element => {
        htmlCode=htmlCode+ "<tr>"+
        "<td>"+parseInt(element[0])+"</td>"

        if(element[1]===""){
        htmlCode=htmlCode+  "<td>"+"-"+"</td>"+
            "</tr>";
        }
        else {
        htmlCode=htmlCode+  "<td>"+element[1]+"</td>"+
            "</tr>";
        } 
    });
    document.getElementById("tableIndicator").innerHTML=htmlCode;
}


//Genera codigo html para agregar Stats
const fillStats=(arr)=>{
    document.getElementById("idStats").innerHTML= "<p> <strong>Promedio: </strong>"+window.computeMean(arr)+"</p>" +
                                                   "<p> <strong>Mediana: </strong>"+window.computeMedian(arr)+"</p>"+
                                                     "<p> <strong>Maximo: </strong>"+window.computeMax(arr)+"</p>"+
                                                    "<p> <strong>Minimo: </strong>"+window.computeMin(arr)+"</p>"; 
}

//// navegacion por pagina

const showIndex=()=>{

    sectIndex.style.display = "block"; 
    sectDefinition.style.display ="none";
    sectIndicators.style.display="none";
    sectselectionScreen.style.display="none";
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display="none";
    
}
const showDefinition=()=>{

    sectIndex.style.display = "none";
    sectDefinition.style.display ="block"; 
    sectIndicators.style.display="none";
    sectselectionScreen.style.display="none";
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display="none";
    
}

const showIndicators=()=>{
    sectIndex.style.display="none";
    sectDefinition.style.display="none";
    sectIndicators.style.display = "block"; 
    sectselectionScreen.style.display = "block"; 
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display="none";
}

const showDataScreen=()=>{
    sectIndex.style.display="none";
    sectDefinition.style.display="none";
    sectIndicators.style.display = "block";
    sectselectionScreen.style.display = "none";
    sectShowDataScreen.style.display = "block";
    sectTableScreen.style.display="none";
}
const showTableScreen=()=>{

    sectIndex.style.display="none";
    sectDefinition.style.display="none";
    sectIndicators.style.display = "block";
    sectselectionScreen.style.display="none";
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display = "block";
}

//addeventlisteners

//funcionalidad a boton index del menu
navIndex.addEventListener("click", ()=>{
    showIndex();
})
//funcionalidad a boton definition del menu
navDefinition.addEventListener("click", ()=>{
    showDefinition();
})

//funcionalidad a boton indicators del menu
navIndicators.addEventListener("click", ()=>{
    showIndicators();
})

//funcionalidad a ordenar listado de indicadores
btOrderListDesc.addEventListener("click", ()=>{
    let Indicators =window.GenerateSubList(window.WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators=window.filterData(Indicators,actualGender);
    Indicators.sort();
    
/*     if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);} */
    fillList(Indicators,"selectIndicators");
})
btOrderListAsc.addEventListener("click", ()=>{
    let Indicators = window.GenerateSubList(window.WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators=window.filterData(Indicators,actualGender);
    Indicators.sort().reverse();
    
/*     if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);} */
    fillList(Indicators,"selectIndicators");
})

//Conecta el botón "siguiente" para que muestre la lista de indicadores filtrada
nextButton.addEventListener("click", ()=> {   
    updateSelection();//actualiza las variables que guarda la selección del usuario
    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
    document.getElementById("idStats").innerHTML=""; //elimina calculos anteriores
    showDataScreen();
}) 

//const 
  //  for(let i=0;i<arrayData.length;i++){
    //    arrayData[(i)][0]=(parseInt(arrayData[(i)][0]));
    //}

    
//Conecta el botón "ver indicador" para que muestre la tabla del indicador, esconde las primeras pantallas 
indicatorButton.addEventListener("click", ()=> {    
    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
    fillTable(arrayData);//dibuja tabla
    showTableScreen();
    
})

//Conecta el botón "Stats" y muestra el valor
statsButton.addEventListener("click", ()=> {
    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
    fillStats(arrayData);//dibuja tabla

})
//funcionalidad a ordenar tabla de indicador
btOrderTableDesc.addEventListener("click", ()=>{
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
    arrayData=window.sortData(arrayData, 0, "desc");
    fillTable(arrayData);//dibuja tabla
})
btOrderTableAsc.addEventListener("click", ()=>{
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
    arrayData=window.sortData(arrayData, 0, "asc");
    fillTable(arrayData);//dibuja tabla
})

//graphicButton.addEventListener("click", ()=>{
    




    //google.charts.load('current', {'packages':['corechart']});
    //google.charts.setOnLoadCallback(drawChart);

    //function drawChart() {
      //  updateSelection();//actualiza las variables que guarda la selección del usuario
        //  let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
          //let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
          //data = google.visualization.arrayToDataTable([ arrayData]);
  
        //};
        //var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        //chart.draw(data, options);
        //document.getElementById("curve_chart").innerHTML=data;


   //   }  
    
//})
   

    



    