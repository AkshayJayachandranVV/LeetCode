/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

   let xPos=x.toString(2).split('')
   let yPos=y.toString(2).split('')

   while(xPos.length<yPos.length) xPos.unshift('0')
   while(xPos.length>yPos.length) yPos.unshift('0')
   let count=0
   for(let i=0;i<xPos.length;i++){
    if(xPos[i]!=yPos[i]){
        count++
    }
   }

   return count
    
};