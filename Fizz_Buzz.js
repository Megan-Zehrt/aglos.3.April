
var n1 = 3
var n2 = 5
var n3 = 15

var fizzBuzz = function(n) {
    
    let result = []

    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            result.push("FizzBuzz")
        }
        else if(i % 3 == 0){
            result.push("Fizz")
        }
        else if(i % 5 == 0){
            result.push("Buzz")
        }
        else{
            result.push("" + i + "")
        }
    }
    return result
};

console.log(fizzBuzz(n1))
console.log(fizzBuzz(n2))
console.log(fizzBuzz(n3))