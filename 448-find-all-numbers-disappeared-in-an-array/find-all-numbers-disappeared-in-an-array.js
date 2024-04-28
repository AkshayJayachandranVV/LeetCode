/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let uniqueValues=new Set(nums)
    let output=[]

    for(let i=1;i<=nums.length;i++){
        if(!uniqueValues.has(i)){
           output.push(i)
        }
    }
    return output
    
};