var test = function(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

var max = function(a, b) {
    if(a > b) return a;
    else return b; 
}

var maxOfThree = function(a, b, c) {
    if(a > b) {
        if(a > c) return a;
        else return c;
    } 
    else {
        if(b > c) return b;
        else return c;
    }     
}

var isVowel = function(ch) {
    return ch.length == 1 && ("aeiouAEIOU".indexOf(ch) != -1);      
}

var sum = function(arr) {
    var s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

var multiply = function(arr) {
    var res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}

var reverse = function(str) {
    var res = "";
    for (let i = 0; i < str.length; i++) {
        res = str[i] + res;
    }
    return res;
}

var findLongestWord = function(arr) {
    var res = 0;
    for (let i = 0; i < arr.length; i++) {
        res = max(res, arr[i].length);
    }
    return res;
}

var filterLongWords = function(words, len) {
    var res = [];
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > len) res.push(words[i]);
    }
    return res;
} 

console.log("Expected output of max(20,10) is 20 and " +
   test(20, function(){ return max( 20, 10); })); 

console.log("Expected output of maxOfThree(5,4,44) is 44 and " +
   test(44, function(){ return maxOfThree(5, 4, 44); })); 

console.log("Expected output of maxOfThree(55,4,44) is 55 and " +
   test(55, function(){ return maxOfThree(55, 4, 44); }));

console.log("Expected output of maxOfThree(55,4,44) is 55 and " +
   test(4, function(){ return maxOfThree(55, 4, 44); }));

console.log("Expected output of isVowel is true " +
   test(true, function(){ return isVowel("a"); }));   

console.log("Expected output of isVowel is false " +
   test(true, function(){ return isVowel("b"); }));   

console.log("Expected output of sum is 10 " +
   test(10, function(){ return sum([4, 6]); }));   

console.log("Expected output of multiply is 24 " +
   test(24, function(){ return multiply([2, 3, 4]); }));   

console.log("Expected output of reverse is gib " +
   test("gib", function(){ return reverse("big"); }));   

console.log("Expected output of findLongestWord is 6 " +
   test(6, function(){ return findLongestWord(["one", "two", "three", "eleven"]); }));

console.log("Expected output of filterLongWords is 'apple' " +
   test('apple', function(){ return filterLongWords(["one", "two", "apple"], 4)[0]; }));

console.log("Expected output of filterLongWords is 'orange' " +
   test('orange', function(){ return filterLongWords(["one", "two", "orange"], 5)[0]; }));

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 2;
})
console.log(b);
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);

const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);