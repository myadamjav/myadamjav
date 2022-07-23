var test = function(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

var sum = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

var multiply = function(arr) {
    return arr.reduce((a, b) => a * b, 1);
}

var reverse = function(str) {
    //return str.split("").reverse().join("");
    return str.split("").reduce((res, ch)=> ch + res, ''); 
}

var filterLongWords = function(words, len) {
    return words.filter(w => w.length >= len);
} 

console.log("Expected output of sum is 10 " +
   test(10, function(){ return sum([4, 6]); }));   

console.log("Expected output of multiply is 24 " +
   test(24, function(){ return multiply([2, 3, 4]); }));   

console.log("Expected output of reverse is gib " +
   test("gib", function(){ return reverse("big"); }));   

console.log("Expected output of filterLongWords is 'apple' " +
   test('apple', function(){ return filterLongWords(["one", "two", "apple"], 4)[0]; }));