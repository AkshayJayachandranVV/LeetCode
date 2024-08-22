/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    

    let int1 = n-1
    let int2 = 1

    let search = int => int.toString().includes('0')

    while(search(int1) || search(int2) ){
        int1= int1-1
        int2= int2+1
    } 

    return [int1,int2]

};