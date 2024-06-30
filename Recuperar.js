
"2)Ordenar un array=[1,0,2,4,7,6,8,12]"


function Ordenar_Array() {
   let array = [1, 0, 2, 4, 7, 6, 8, 12];

   
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

   
    console.log(array);
}

//"3)Estructura de control"
//La Estructura de control son los componentes que determinan como se ejecutan las distintas partes de un programa bajo condiciones
//Existe 2 tipo:
//La Estructura de control Condicional:
//Permite tomar desiciones basadas en condiciones V o F, 
//si es V el programa ejecuta una accion especfica
//si es F el programa ejecuta una acción diferente

//Existen 2 tipos:
//if/else
//La estrcutura if/else evalua una condición, si es verdadera ejecuta un bloque de codigo,
//si es falsa ejecuta un bloque de código diferente

//switch
//Evalua una expresión y ejecuta un bloque de codigo según el valor de la expresión

//Estructura de control Iterativas
//Permiten repetir un bloque de codigo varias veces

//Existen 3 tipos:
//for:
//Repite un bloque de codigo un numero fijo de veces

//while:
//Repite un bloque de código mientras una condición sea verdadera 

//do-while
//Similar a while, pero asegura que el bloque se ejecute al menos una vez





























