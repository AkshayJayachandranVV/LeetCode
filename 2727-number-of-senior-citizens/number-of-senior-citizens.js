/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {

let count=0
    for(i=0;i<details.length;i++){
        let sliceValue=details[i].slice(0,details[i].length-2)
        let age=""
        age+=sliceValue[sliceValue.length-2] + sliceValue[sliceValue.length-1]
        if(Number(age)>60){
           count++
        }
    }

    return count
    
};