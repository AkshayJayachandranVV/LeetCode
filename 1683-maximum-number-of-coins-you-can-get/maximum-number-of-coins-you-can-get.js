/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    piles.sort((a,b)=>a-b)
    let j=0,sum=0
    for(let i=piles.length-2;i>j;i-=2){
        sum+=piles[i]
        j++
    }

    return sum

};