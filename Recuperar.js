
"2)Ordenar un array=[1,0,2,4,7,6,8,12]"

// Array a ordenar
let array = [1, 0, 2, 4, 7, 6, 8, 12];

// Implementación del algoritmo de Bubble Sort
for (let i = 0; i < array.length - 1; i++) {
    // En cada iteración, el elemento más grande "burbujea" hacia el final del array
    for (let j = 0; j < array.length - 1 - i; j++) {
        // Comparar elementos adyacentes
        if (array[j] > array[j + 1]) {
            // Intercambiar si el elemento actual es mayor que el siguiente
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

// Mostrar el array ordenado
console.log(array);



































