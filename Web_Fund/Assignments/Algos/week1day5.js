// week 1 day 5 
// Write a function reverse( arr ) to reverse an array, if we were given...

// ["a", "b", "c", "d", "e"];
// we expect to get back...

// ["e", "d", "c", "b", "a"];

var arr = ["a", "b", "c", "d", "e"];
function reverse(arr) {
    var arr2 = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr.pop())
    }
    return arr2
}
console.log(reverse(["a", "b", "c", "d", "e"]));