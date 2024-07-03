/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
  const n=nums.length
  let output=[]
  let prefix=[]
  let suffix=[]
  prefix[0]=1
  suffix[n-1]=1
  

  for(let i=1;i<nums.length;i++){
    console.log(prefix[i-1],nums[i-1])
    prefix[i]=prefix[i-1] * nums[i-1]
  }

  for(let j=n-2;j>=0;j--){
    suffix[j]=suffix[j+1]*nums[j+1]
  }

  console.log(suffix)
  console.log(prefix)
  
  for(let k=0;k<n;k++){
     output.push(suffix[k] * prefix[k])
  }

  return output
};