/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {

    let map =new Map()

    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i]) + 1)
        }else{
            map.set(s[i] , 1)
        }
    }


    let i=0,res=""

    let arr = Array.from([...map.entries()].sort())

    while(i<s.length){
        for(let j=0;j<arr.length;j++){
            let curr = arr[j]
            if(curr[1]>0){
                res += curr[0]
                curr[1]--
                i++
            }
        }
        arr.reverse()
    }

    return res 
};