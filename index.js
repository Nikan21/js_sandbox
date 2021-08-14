/* class Cat{
    constructor(mustache, paws, tail, wool){
        this.mustache = mustache;
        this.paws = paws;
        this.tail = tail;
        this.wool = wool;
    }

    sayPurr (){
        return 'Purr';
    };

    sayMeow(){
        return 'Meow';
    };
}

class Lion extends Cat{
    constructor(mustache, paws, tail, wool, fur){
        super(mustache, paws, tail, wool);
        this.fur = fur;
    }

    sayMeow(){
        return 'Rar';
    };
} */

/* class Password{
    constructor(pass){
        this.pass = pass;
        this.haspass = false;
    }

    get showPassword(){
        if (this.haspass === false){
            this.haspass = true;
            return this.pass;
        }else{
            return null;
        }
    }
}
const firs = new Password(12) */

/* class Person{
    constructor(firstname){
        this.firstname = firstname;
        this.indicator = 0;
    }

    get getName(){
        return this._firstname;
    }

    set setName(new_name){
        if( typeof new_name !== 'string'){
            throw new Error ('Only string type!')
        }

        if (this.indicator < 3){
            this.indicator +=1;
            this._firstname = new_name;
            return;
        }else{
            throw new Error('You can\'t change name in four times')
        }
    }
}

const person1 = new Person; */

/* class Queue{
    constructor(){
        this.queue = {};
        this.tail = 0;
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i]
            this.push(element)
        }
        this.head = 0;
    }

    push (element) {
        this.queue[this.tail++] = element;
    }

    shift () {
        if (this.tail === this.head)
            return undefined

        const element = this.queue[this.head];
        delete this.queue[this.head++];
        return element;
    }
}

const queue = new Queue(1, 2, 3, 4, 5, 6)
console.log(queue) */

/* const map = new Map();

map.set('userId', 1);
map.set('undefined', 'default');
map.set('default', undefined); */

/* const month = 9;
const season = Math.ceil(month / 3);
switch (season) {
  case 1:
    console.log("Spring");
    break;
  case 2:
    console.log("Summer");
    break;
  case 3:
    console.log("Autumn");
    break;
  case 4:
    console.log("Winter");
    break;
}
 */
/* let a = 0;
for (let i = 0; i <= 5; i++) {
    a += i;
}
console.log(a); */

/* const age = 12;
if (age >= 18){
    console.log('Совершенолетний');
}else{
    console.log('Не совершенолетний')
}

const num = 12;
const number = Math.sqrt(num);


if (number % 2 === 0){
    console.log('Остатка нет');
}else{
    console.log('Остаток есть');
}


if (number - Math.floor(number) === 0){
    console.log('Остатка нет');
}else{
    console.log('Остаток есть');
}
 */

/* const array = [];
for (let i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array);

const array2 = array.slice(0);
console.log(array2);

const array3 = [];
for (let i = array2.length / 2; i < array2.length; i++) {
  array3.push(array2[i]);
}
console.log(array3);
 */

/* const array = [5, 55, 3, 324, 33, 12, 654];

const result = Math.max(...array)
console.log(result) */

/* const array = [1, 2, 3, 4];
const array1 = [...array, ...array];
console.log(array1); */

/* function max(...theArgs){
    console.log(theArgs);
    console.log(arguments);
}
console.log(max(1, 2, 3)) */

/* let Numm = 0;
const nummDisplay = document.querySelector('#Number');

function displayNumber(){
    nummDisplay.textContent = Numm;
}

displayNumber()

function addOne(){
    Numm +=1;
    console.log(Numm);
    displayNumber()
    nummDisplay.style.border = '3px solid green';
}

function removeOne(){
    Numm -=1;
    console.log(Numm);
    displayNumber()
    nummDisplay.style.border = '3px solid red';
}

function addNum(){
    const userValue = Number(prompt('Какое число нужно добавить?'));
    Numm += userValue;
    console.log(Numm);
    displayNumber()
} */

const array = [1, 2, 3];

function copy(){
 const array2 = [...array];
 return array2;
}

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];

function concat (){
    return [...array3, ...array4];
}

const obj = {0:1, 1:2, 2:3};
const obj1 = {3:4, 4:5, 5:6};

function concatObj (){
    const obj2 = {...obj, ...obj1};
    return obj2;
}

const array5 = [1, 2];
const array6 = [3, 4];
const array7 = [5, 6];

function addArray (){
    return [array5, ...array6, ...array7];
}

function create (...value){
    return value;
}

console.log(create(1, 2, 3, 4));

function splice (value1, value2, ...otherValue){
    return value1, value2, otherValue;
}

console.log(splice(1, 2, 3, 4, 5, 6, 7));


/*Need ask for this task*/
function deleteOne (indexDelete, array, ...newValue){
    const deleteElement = array[indexDelete];
    delete array[indexDelete];
    console.log(deleteElement);
    array[indexDelete] = newValue;
    return array;
}

console.log(deleteOne(2, [1, 2, 3, 4], 5));



