function rotateByKElements(k){
    let array = [1, 2, 3, 4, 5, 6];
    let rotate = array.splice(0, k);
    array.push(...rotate);
    return array;
}
console.log(rotateByKElements(2));