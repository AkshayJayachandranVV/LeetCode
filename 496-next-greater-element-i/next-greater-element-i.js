/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let array=[],flag

     for(let i=0;i<nums1.length;i++){
        flag=0
          let index=nums2.indexOf(nums1[i])
             for(let j=index;j<nums2.length;j++){
                 if(nums1[i]<nums2[j]){
                    array.push(nums2[j])
                    flag=1;
                    break;
                 }
             }
             if(flag==0){
                array.push(-1)
             }
          
     }

     return array

};