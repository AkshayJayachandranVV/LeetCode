/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {


    const n=nums.length
    const oneSize=nums.reduce((sum,num)=>sum+num,0)

    const part = nums.slice(0,oneSize)

    let onesPart=part.reduce((sum,num)=>sum+num,0)

    let max1s=onesPart

    for(let i=0;i<n;i++){
        if(nums[(oneSize + i) % n] ==1){
            onesPart++
        }

        if(nums[i] ==1){
           onesPart--
        }

        max1s=Math.max(max1s,onesPart)
    }

    return oneSize - max1s

};