/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {

    let count = candyType.length / 2
    let setValue = [...new Set(candyType)]
    let diffCandies = setValue.length

    if (count == diffCandies) {
        return count
    } else if (count < diffCandies) {
        return count
    } else if (count > diffCandies) {
        return diffCandies
    }

};