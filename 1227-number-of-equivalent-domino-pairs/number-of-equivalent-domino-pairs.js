/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    
    let count=0
    let map=new Map()

    for(let [a,b] of dominoes){
        let key=a<b?`${a},${b}`:`${b},${a}`
        if(map.has(key)){
            count+=map.get(key)
            map.set(key,map.get(key)+1)
        }else{
            map.set(key,1)
        }
    }

    
    return count
};