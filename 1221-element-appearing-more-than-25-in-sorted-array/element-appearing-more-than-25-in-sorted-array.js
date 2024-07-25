/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    let max=0,count=0,num=0

    if(arr.length==1) return arr[0]
    
     for(let i=0;i<arr.length;i++){
         if(arr[i] == arr[i+1]){
            count++
         }else{
            if(count>max){
               max=count
               num=arr[i]
            }
            count=0
         }
     }

    return num

};