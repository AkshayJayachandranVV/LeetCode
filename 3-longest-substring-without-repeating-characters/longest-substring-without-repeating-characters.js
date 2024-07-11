/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let str="",max=0

    for(let i=0;i<s.length;i++){
        if(!str.includes(s[i])){
            str+=s[i]
            max=Math.max(max,str.length)
        }else{
            let index=str.indexOf(s[i])
            str=str.substring(index+1) + s[i]
        }
    }

    return max

};