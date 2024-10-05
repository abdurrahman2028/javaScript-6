
// 01 Take four parameters. Multiply the four numbers and then return the result
function multiplyFourNumbers(a, b, c, d){
    return a * b * c * d;
}
console.log(multiplyFourNumbers(3, 5, 7, 9));


// 02 Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function processNumber(a){
    if (a % 2 === 0) {
        answer = "This number is even : " + a / 2;
    } else {
        answer = "This number is odd : " + a * 2;
    }
    return answer
}
console.log(processNumber(7));


// 03 Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arr){
    let sum_num = 0;
    for (let avgArr of arr){
        sum_num += avgArr;
    }
    sum_num = sum_num / arr.length;
    console.log(sum_num);
}
make_avg([2, 8, 3, 5, 2, 6, 9, 4, 5]);


// 04 Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 
function count_zero(binaryString){
    zeroCount = 0;
    for (let count of binaryString){
        if (count === '0'){
            zeroCount++;
        }
    }
    return zeroCount;
}
console.log(count_zero('1010010'))



// 05 Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(num){
    return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(odd_even(5));
console.log(odd_even(4));

 
