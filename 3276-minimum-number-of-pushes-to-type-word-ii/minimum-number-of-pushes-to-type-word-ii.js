/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {

    let map = new Map()

    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            map.set(word[i], map.get(word[i]) + 1)
        } else {
            map.set(word[i], 1)
        }
    }


    let mapArray = Array.from(map.entries())

    let sortArray = mapArray.sort((a, b) => b[1] - a[1])

    let total = 0, value = 0

    for (let j = 0; j < sortArray.length; j++) {
        if (j % 8 == 0) {
            value++
        }
        total += value * sortArray[j][1]
    }

    return total

};