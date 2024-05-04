/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    
    let binaryNum=num.toString(2).split("")
    
    for(let i=0;i<binaryNum.length;i++){
        if(binaryNum[i]=='0'){
            binaryNum[i]='1'
        }else{
            binaryNum[i]='0' 
        }
    }

    return parseInt(binaryNum.join(''),2)

};