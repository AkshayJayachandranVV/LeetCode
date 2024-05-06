/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    let sortArray=[...score].sort((a,b)=>b-a)
    let rank=[]
    for(let i=0;i<sortArray.length;i++){
        let index=score.indexOf(sortArray[i])
        if(i==0){
            rank[index]="Gold Medal"
        }else if(i==1){
            rank[index]="Silver Medal"
        }else if(i==2){
            rank[index]="Bronze Medal"
        }else{
            rank[index]=(i+1).toString()
        }
    }

    return rank

};