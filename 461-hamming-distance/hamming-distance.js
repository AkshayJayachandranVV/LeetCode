/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

   let xPos=x.toString(2).split('').reverse()
   let yPos=y.toString(2).split('').reverse()
   console.log(xPos)
   console.log(yPos)


   while(xPos.length<yPos.length) xPos.push('0')
   while(xPos.length>yPos.length) yPos.push('0')
   let count=0
   for(let i=0;i<xPos.length;i++){
    console.log(xPos[i],yPos[i])
    if(xPos[i]!=yPos[i]){
        count++
    }
   }

   return count
    
};