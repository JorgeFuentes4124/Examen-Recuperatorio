
"2)Ordenar un array=[1,0,2,4,7,6,8,12]"

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



































