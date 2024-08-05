/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {

   let map = new Map()

   for(let i=0;i<arr.length;i++){
       if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1)
       }else{
        map.set(arr[i],1)
       }
   }

   let mapArray=Array.from(map.entries())
   let result=[]

   for(let [key,value] of mapArray){
        if(value == 1){
            result.push(key)
        }
   }

   let index=k-1

   if(result.length<k){
        return ""
   }else{
        return result[index]
   }
    
};