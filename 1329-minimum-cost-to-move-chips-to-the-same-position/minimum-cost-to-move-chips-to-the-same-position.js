/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {


  let oddCount=0,evenCount=0
  for(let j=0;j<position.length;j++){
      if(position[j]%2==0){
         evenCount++
      }else{
         oddCount++
      }
  }

  return Math.min(oddCount,evenCount)


};