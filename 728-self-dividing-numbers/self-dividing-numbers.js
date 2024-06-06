/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];
    for( let  i = left ; i <= right ; i++){
        if(checkNumber(i)){
            res.push(i)
        }
    }
    return res;
};

var checkNumber = (num) => {
    let temp = num;
    while(temp > 1){
       let rem = Math.floor(temp % 10);
        if(num % rem != 0){
            return false;
        }
       temp /=10;
    }
    return true;
}