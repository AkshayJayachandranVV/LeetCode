/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let array=[]

    function backTrack(start,path){
         array.push([...path])
         for(let i=start;i<nums.length;i++){
            path.push(nums[i])
            backTrack(i+1,path)
            path.pop()
         }
    }
    backTrack(0,[])
    return array

};