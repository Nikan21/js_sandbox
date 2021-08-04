/*1*/
function sayType(message){
    if (typeof message === 'number'){
        return 'Это число';
    }else if (typeof message === 'string'){
        return'Это строка';
    }else{
        return'Не знаю';
    }
}

/*2
Math.ceil
Math.floor
Надо почитать что они делают
*/
function randNum (){
    min = 0;
    max = 100;
    return Math.floor (Math.random () * (max-min +1)) + min;
}

/*3*/
let star = '';
for(let i = 1; i <= 7; i++){
    star += '*';
}
console.log(star);

/*4*/
let figure = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        figure += '*';
    };
    figure += '\n'
}
console.log(figure);

/*5*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
for (let i = 0; i <= array.length; i++) {
    if (i % 2 === 1){
        delete array[i];
    };
};
console.log(array);

/*6*/
const array1 = [1, 2, 3, 4, 5];
for (let i = 5; i < 10; i++) {
    array1[i] = i+1;
}

console.log(array1);

/*7*/
const array2 = [];
for (let i = 1; i <= 5; i++) {
    array2.push(`user ${i}`);
    if (array2.length === 5){

    }
}
console.log(array2);

/*8*/
const array3 = [5,6,7,8,9,10];
const array4 = [1];
array4.push(array3);
console.log(array4);

/*9*/
const array5 = [1, 'fgd', 24, '24124'];
console.log(array5.join(' или '));

/*10*/
const array6 = [4, 9, 16, 25, 36, 49];
const array7 = array6.map (function(value){
    return Math.sqrt(value);
});

console.log(array6);
console.log(array7);


с