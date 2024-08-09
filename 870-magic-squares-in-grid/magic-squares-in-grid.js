/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {

    const row = grid.length
    const col = grid[0].length

    if (row < 3 || col < 3) return 0

    const isValid = (matrix) => {

        if (matrix[1][1] !== 5) {
            return false
        }

        const visited = {}
        let expectedSum = 0
        for (let i = 0; i < 3; i++) {
            let sum = 0
            for (let j = 0; j < 3; j++) {
                if (matrix[i][j] >= 1 && matrix[i][j] <= 9 && !visited[matrix[i][j]]) {
                    visited[matrix[i][j]] = true
                } else {
                    return false
                }
                sum += matrix[i][j]
            }
            if (i === 0) expectedSum = sum;

            if (sum !== expectedSum) {
                return false
            }
        }

        for (let j = 0; j < 3; j++) {
            let sum = 0
            for (let i = 0; i < 3; i++) {
                sum += matrix[i][j]
            }
            if (sum !== expectedSum) {
                return false
            }
        }

        let sumA = 0, sumB = 0

        for (let i = 0; i < 3; i++) {
            sumA += matrix[i][i]
            sumB += matrix[i][2 - i]
        }

        if (sumA !== expectedSum || sumB !== expectedSum) {
            return false
        }
        return true

    }

    let answer = 0

    for (let i = 0; i <= row - 3; i++) {
        const m = grid.slice(i, i + 3)
        for (let j = 0; j <= col - 3; j++) {
            if (isValid(m.map(o => o.slice(j, j + 3)))) {
                answer++
            }
        }
    }

    return answer

};