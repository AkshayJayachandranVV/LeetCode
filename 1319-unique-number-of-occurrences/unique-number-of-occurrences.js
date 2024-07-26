/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    arr.sort((a,b)=>a-b)

    let count=0,array=[]

    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            count++;
        }else{
            array.push(count)
            count=0
        }
    }

    let setArr=[...new Set(array)]

    return setArr.length==array.length
    
};