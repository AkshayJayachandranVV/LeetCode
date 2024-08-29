/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
      let ans = 0;
  let data = {};
  
  for (let char of s) {
    data[char] = (data[char] || 0) + 1;
    if (data[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;

};