/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {

    let count=0
    for(let i=left;i<=right;i++){
        let value = i.toString(2).split('1').length - 1
        console.log(value)
        if(prime(value)){
            count++
        }
    }

    function prime(value){
        if(value<2) return false
        for(let j=2;j<=Math.sqrt(value);j++){
            if(value%j==0){
                return false
            }
        }
        return true
    }

    return count
    
};