/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

GenerateList = (obj)  =>{
  Arroutput=[];
  for (prop in obj){
      Arroutput.push(prop);
  };
  return Arroutput;
};

GenerateSubList = (obj,subprop)  =>{
  Arroutput=[];
  for (prop in obj){
      Arroutput.push(obj[propGenerateSubList = (obj,subprop)  =>{
        Arroutput=[];
        for (prop in obj){
            Arroutput.push(obj[prop][subprop]);
        };
        return Arroutput;
      }[subprop]);
  };
  return Arroutput;
};
