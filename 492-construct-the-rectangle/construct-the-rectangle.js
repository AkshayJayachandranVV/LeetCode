/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {

    let sqrt=Math.sqrt(area)

    for(let i=Math.floor(sqrt);i>0;i--){
        if(area%i==0){
            return [area/i,i]
        }
    }

    return [area,1]


};