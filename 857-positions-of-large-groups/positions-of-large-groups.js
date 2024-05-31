/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {

    let count=1,array=[],start=0

    for(let i=0;i<=s.length;i++){
        if(s[i]==s[i-1]){
            count++
        }else{
            console.log(count + " "+ s[i-1])
             if(count>=3){
                array.push([start,i-1])
             }
            count=1
            start=i
        }
    
    }


     return array
    
};