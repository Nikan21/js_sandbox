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

const age = 12;
if (age >= 18){
    console.log('Совершенолетний');
}else{
    console.log('Не совершенолетний')
}

const num = 12;
const number = Math.sqrt(num);

/*1*/
if (number % 2 === 0){
    console.log('Остатка нет');
}else{
    console.log('Остаток есть');
}

/*2*/
if (number - Math.floor(number) === 0){
    console.log('Остатка нет');
}else{
    console.log('Остаток есть');
}

