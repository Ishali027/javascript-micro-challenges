// 100-Addition
function addNumbers( num1, num2){
    return num1 + num2;
}
let result = addNumbers(1, 2);
console.log(result);
// done 100-Addition


// 110- Conditional
function whichIsBigger( num1, num2){
    if( num1 > num2){
        return 'The first number is bigger!';
    } else if ( num1 < num2){
        return 'The second number is bigger!';
    } else{
        return 'The numbers are the same';
    }
}
result = whichIsBigger(3,8);
console.log(result);
//done 110-conditional


// 120-Arrays
let numbers = [2, 4, 6, 8, 10];
function addFirstAndLast( array){
    let sum = 0;
   sum += array[0] + array[array.length-1];
    return sum

}
result = addFirstAndLast(numbers);
console.log(result);
// done 120-arrays