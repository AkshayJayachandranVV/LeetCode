/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  

    let result=[]

    function backTrack(remain,combo,start){
        if(remain==0){
            return result.push([...combo])
        }else if(remain<0){
            return 
        }


        for(let i=start;i<candidates.length;i++){
            combo.push(candidates[i])
            backTrack(remain-candidates[i],combo,i)
            combo.pop()
        }
    }

    backTrack(target,[],0)

    return result
 

};