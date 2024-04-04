
var n1 = 5
var k1 = 2

var n2 = 6
var k2 = 5











var findTheWinner = function(n, k) {
    // base case
    if (n === 1) {
        return 1;
    }

    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    function helper(array, amount) {
        let index = 0;
        while (array.length > 1) {
            index = (index + amount - 1) % array.length;
            array.splice(index, 1);
        }
        return array[0];
    }

    return helper(arr, k);
};

console.log(findTheWinner(n1, k1))
console.log(findTheWinner(n2, k2))