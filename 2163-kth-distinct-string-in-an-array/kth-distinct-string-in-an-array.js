/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {

    let count=0

    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
           count++
           if(count==k){
              return arr[i]
           } 
        }
    }

    return ""
    
};