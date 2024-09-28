/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {

    let array = []

    for(let i=0;i<operations.length;i++){
        if(operations[i]=="C"){
            array.pop()
        }else if(operations[i]=="D"){
            array.push(Number(array[array.length-1]) * 2)
        }else if(operations[i]=="+"){
            array.push(Number(array[array.length-1]) +  Number(array[array.length-2]))
        }else{
            array.push(Number(operations[i]))
        }
    }

    let sum=0

   if(array.length == 0){
    return 0
   }else{
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
   }

   return sum
    
};