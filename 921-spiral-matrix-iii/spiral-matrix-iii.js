/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    
    const result = []

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dirIndex = 0, stepCount = 1
    let r = rStart, c=cStart
    result.push([r,c])

    while(result.length < rows*cols){
        for(let i=0; i<stepCount; i++){
            r += directions[dirIndex][0]
            c += directions[dirIndex][1]
            if(r>= 0 && r<rows && c>=0 && c<cols){
                result.push([r,c])
            }
        }
        dirIndex = (dirIndex + 1) % 4
        if(dirIndex%2 == 0){
            stepCount += 1;
        }
    }

    return result

};