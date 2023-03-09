class Fibonnaci {
    array = [1, 1];

    secondNumber = firstNumber + secondNumber
    constructor (number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }
}
function test(n){
    let array = [1, 1];
    for(let i = 0; i < n - 2; i++){
        let result = array[i] + array[i + 1];
        array.push(result)
    }
    console.log(array)
}
test(50)