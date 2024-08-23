/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {

  let array=[]

   if(n%2!==0){
       array.push(0)
   }

    while(n>1){
        array.push(Math.floor(n/2))
        console.log(n/2,-n/2)
        array.push(Math.ceil(-(n/2)))
        n-=2
    }

    return array.sort((a,b)=>a-b)
    
};