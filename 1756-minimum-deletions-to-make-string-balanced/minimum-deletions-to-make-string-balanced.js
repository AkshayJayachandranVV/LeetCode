/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {

    let deletes=0,count=0

    for(ch of s){
        if(ch == 'b'){
            count++
        }else if(count>0){
            deletes++
            count--
        }
    }

    return deletes

  
};