let x = 12;
var y = 7;

{
    let x = 7;
    var y = 9;
    console.log("Value y is " + y)
    console.log("Value of x in this block = " + x)

    var y = 12;
    console.log("Value of new y is " + y)
}

console.log("Value of x outside the block is " + x)
