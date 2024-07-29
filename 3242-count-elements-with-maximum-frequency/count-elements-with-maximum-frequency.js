/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map=new Map()

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }

    let array = [...map.values()]

    let max=Math.max(...array)

    count=0

   for(let i=0;i<array.length;i++){
        if(array[i]==max){
            count+=array[i]
        }
   }

   return count

    
};