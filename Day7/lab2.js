//--------------- a -------------------------
console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let spreadOp = [...friends, ...fruits];

console.log(spreadOp);


//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let Fname = "Eshak";
let Lname = "Maged";

[Fname, Lname] = [Lname, Fname];

console.log(Fname, Lname);

//--------------- 3 -------------------------
console.log("=".repeat(20));
console.log("Assignment Three:-");
console.log("=".repeat(20));

function rest(...arr) {
    for (let item of arr) {
        return [Math.max(...arr),Math.min(...arr)];
    }
}

let [maxValue, minValue] = rest(7,9,8,5,121,46,6,47);

console.log("Minimum Value is:", minValue); // 1
console.log("Maximum Value is:", maxValue); // 13

//--------------- b -------------------------
console.log("=".repeat(20));
console.log("Function Object Assignment:-");
console.log("Assignment One:-");
console.log("=".repeat(20));

function ex() {
    if (arguments.length !== 2){
        throw new Error("Function accepts only 2 parameters");
    }   else {
        for (let item of arguments) {
                console.log(item);
            }
        }
    }

// ex(1, 5);
//ex();
//ex(1);
//ex(1,7,5);

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

function numbers(...num) {
    if (num.length === 0) {
        throw new Error(" function without passing any parameters");
    } else {
        for (let item of num) {
            if (typeof item !== 'number') {
                throw new Error(" function accepting only numbers");
            } else {
                console.log(item);
            }
        }
    }
}
numbers(1,5,6);
//numbers("kp");
//numbers();

//--------------- 3 -------------------------
console.log("=".repeat(20));
console.log("Assignment Three:-");
console.log("=".repeat(20));


function one(...para) {
    return para.reverse();
}

let reverseV = (...paras) => {
let re = []
    for (let i = paras.length - 1; i >= 0;i--) {
        re.push(paras[i]);
    }
        return re;
}

console.log("First Reversed Function");
console.log(one(5, 4, 3, 2, 1));

console.log("Second Reversed Function");
console.log(reverseV(10,11,12,13,14,15));
