/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {

const dictSet = new Set(dictionary);
    const n = s.length;
    const dp = new Array(n + 1).fill(0); // dp[i] = minimum extra characters for s[0...i-1]

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1; // Assume we take the current character as extra

        for (let j = 0; j < i; j++) {
            const word = s.slice(j, i); // Get substring s[j...i-1]
            if (dictSet.has(word)) {
                dp[i] = Math.min(dp[i], dp[j]); // If it's in the dictionary, minimize
            }
        }
    }

    return dp[n]; 
    
    
};