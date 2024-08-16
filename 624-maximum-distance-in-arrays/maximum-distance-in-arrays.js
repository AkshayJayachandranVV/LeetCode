/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {

   let maxDist=0
   let currentMin=arrays[0][0]
   let currentMax=arrays[0][arrays[0].length-1]

   for(let i=1;i<arrays.length;i++){

    let minVal=arrays[i][0]
    let maxVal=arrays[i][arrays[i].length-1]

    maxDist=Math.max(maxDist,Math.abs(maxVal - currentMin),Math.abs(currentMax - minVal))

    currentMin = Math.min(currentMin,minVal)
    currentMax = Math.max(currentMax,maxVal)

   }

   return maxDist
    
};