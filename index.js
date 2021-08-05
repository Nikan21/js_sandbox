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


class Password{
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
const firs = new Password(12)