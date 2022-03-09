// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'code'. For example if array = [-1,-3,2], your function will return ['code','code',2].




function numberToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'code'
        }
        
    }
    return arr;
}

console.log(numberToString([3,7,-13,2002,-1981]));
