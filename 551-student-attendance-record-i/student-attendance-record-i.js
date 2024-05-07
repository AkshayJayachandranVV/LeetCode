/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    let absentCount=0,late=false

    for(let i=0;i<s.length;i++){
        if(s[i]=='A'){
           absentCount++
        }
        if(absentCount>2){
            return false
        }

        if(s[i]=='L' && s[i+1]=='L' && s[i+2]=='L'){
            late=true
        }
    }

    if(late==false && absentCount<2){
        return true
    }else{
        return false
    }

};