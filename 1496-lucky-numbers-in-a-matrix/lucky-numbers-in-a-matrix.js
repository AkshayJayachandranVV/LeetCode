/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {

    let flag,output=[]

    for(let i=0;i<matrix.length;i++){
        flag=0
        let minVal=Math.min(...matrix[i])
        let index=matrix[i].indexOf(minVal)
        for(let j=0;j<matrix.length;j++){
            console.log(minVal + " lllllll")
            console.log(matrix[j][index])
            if(minVal<matrix[j][index]){
                console.log("hjyyyy")
                flag=1
            }
        }
        if(flag==0){
            output.push(minVal)
        }
    }

    return output
    
};