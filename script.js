

// 01 Take four parameters. Multiply the four numbers and then return the result
function called_1(a, b, c, d){
    sum = a * b * c * d; 
    return sum;
}
console.log(called_1(3, 5, 7, 9));


// 02 Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function called_2(a){
    if (a % 2 === 0) {
        answer = "This number is even : " + a * 2;
    } else {
        answer = "This number is odd : " + a / 2;
    }
    return answer
}
console.log(called_2(10));


// 03 Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
sum_num = 0;
function make_avg(){
    arr = [2, 8, 3, 5, 2, 6, 9, 4, 5];
    for (let avgArr of arr){
        sum_num += avgArr;
    }
    sum_num = sum_num / arr.length;
    console.log(sum_num);
}
make_avg();


// 04 Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 
function count_zero(binaryString){
    zeroCount = 0;
    for (let i = 0; i < binaryString.length; i++){
        if (binaryString[i] === '0'){
            zeroCount++;
        }
    }
    return zeroCount;
}
console.log(count_zero('1010010'))



// 05 Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(num){
    if(num % 2 === 0){
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
console.log(odd_even(5));
console.log(odd_even(4));




