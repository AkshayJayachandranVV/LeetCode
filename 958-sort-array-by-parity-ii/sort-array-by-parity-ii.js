/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    
    let output=[]

    for(i=0,j=0,k=1;i<nums.length;i++){
        if(nums[i]%2==0){
            output[j]=nums[i]
            j=j+2
        }else{
            output[k]=nums[i]
            k=k+2
        }
    }

    return output

};