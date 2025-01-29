/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

        let combined = [...nums1,...nums2]

    let sortArr = combined.sort((a,b)=>a-b)

    console.log(sortArr)

     if(sortArr.length % 2 == 1){
        let mid = sortArr.length/2
        console.log(mid)
        return sortArr[Math.floor(sortArr.length/2)]
     }else{
        console.log("enetered")
        let mid = Math.floor(sortArr.length/2)
        let sum = sortArr[mid] + sortArr[mid-1]
        return sum /2
     }
  
    
};