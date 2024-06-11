/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

    arr1.sort((a,b)=>a-b)

    let check,output=[]

    for(let i=0;i<arr1.length+arr2.length;i++){
        check=true
        while(check)
        if(arr1.includes(arr2[i])){
            let index=arr1.indexOf(arr2[i])
            output.push(arr1[index])
            arr1.splice(index,1)
            i--
        }else{
            check=false
        }
    }

    for(let j=0;j<arr1.length;j++){
        output.push(arr1[j])
    }

    return output
    
};