//  {"op":"-", "n1":10, "n2":20};

 //way-1 object
const objMinus = {
    op: "-",
    n1: 10,
    n2: 20
};

//way-2 constructor 
class mathTest {
    constructor(op, n1, n2){
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
} 
const objPlus = new mathTest("+",50,100);


function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result;
}

console.log(calculate({"op":"-","n1":10,"n2":20}));
console.log(calculate(objMinus));
console.log(calculate(objPlus));
    



// Try to call calculate function correctly
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way
*/