/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {

    // if(1<=area && area<=10**7){

    let sqrt=Math.sqrt(area)

    for(let i=Math.floor(sqrt);i>0;i--){
        console.log(i + " "+ area/i)
        if(area%i==0){
            return [area/i,i]
        }
    }

    return [area,1]
    // }

};