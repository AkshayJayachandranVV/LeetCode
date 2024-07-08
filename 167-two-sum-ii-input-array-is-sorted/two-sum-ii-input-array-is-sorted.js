/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

   let left=0
   let right=numbers.length-1

   while(left<right){

    let ans=numbers[left] + numbers[right]

    if(ans==target){
       return [left+1,right+1]
    }
     if(ans<target){
        left++
    }else{
        right--
    }

   }
    
    
};