/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {

    let sum= apple.reduce((acc,value)=>acc+=value)
    
    let maxCapacity=0,count=0

    while(capacity.length){
        let maxValue=Math.max(...capacity)
        maxCapacity+=maxValue
        count++
        if(maxCapacity>=sum){
            return count
        }
        let index=capacity.indexOf(maxValue)
        capacity.splice(index,1)
    }
};