/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {

    if(n==0){
        return 0
    }
    
    let array = [0,1,1]

    for(let i=3;i<=n;i++){
        array[i] = array[i-1] + array[i-2] + array[i-3]
    }

    return array[array.length-1]

};