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

const map = new Map();

map.set('userId', 1);
map.set('undefined', 'default');
map.set('default', undefined);
