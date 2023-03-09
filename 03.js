function takeString(string){
    let regex = /\d+/g;
    let result = string.match(regex);
    result = result.join('').split('')
    return result;
}
console.log(takeString('2342'));
console.log(takeString('A243b'));