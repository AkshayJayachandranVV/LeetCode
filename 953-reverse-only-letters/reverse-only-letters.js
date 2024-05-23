/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
    let count=0,copy='',array=[]
    // console.log(s[s.length-1])
    for(let i=s.length-1;i>=0;i--){
        if(/[a-zA-Z]/.test(s[i])){
            array.push(s[i])
            console.log(s[i] + "firtrtrtt")
        }
    }

    for(let j=0;j<s.length;j++){
        if(/[a-zA-Z]/.test(s[j])){
            copy+=array[count]
            count++
        }else{
            copy+=s[j]
        }
    }

    return copy
    
};