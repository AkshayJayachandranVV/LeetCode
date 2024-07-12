/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    function expand(left,right){
        while(left>=0 && right<s.length && s[left]==s[right]){
            left--
            right++
        }
        return s.substring(left+1,right)
        
    }

    let longest=""

    for(let i=0;i<s.length;i++){

        let odd=expand(i,i)
        let even=expand(i,i+1)

        if(odd.length>longest.length){
            longest=odd
        }

        if(even.length>longest.length){
            longest=even
        }
        
    }

    return longest

};