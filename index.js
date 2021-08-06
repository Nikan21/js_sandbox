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


class Person{
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

const person1 = new Person;