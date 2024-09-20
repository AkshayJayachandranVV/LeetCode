/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {

    const rev = s.split('').reverse().join('');
    for (let i = 0; i <= s.length; i++) {
        if (s.startsWith(rev.slice(i))) {
            return rev.slice(0, i) + s;
        }
    }
    
};