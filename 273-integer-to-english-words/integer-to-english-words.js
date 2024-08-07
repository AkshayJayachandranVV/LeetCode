/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

     if(num == 0) return "Zero"

    const belowTwenty = [
        "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
        "Eighteen", "Nineteen"
    ];
    
    const tens = [
        "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    
    const thousands = ["", "Thousand", "Million", "Billion"];

    let result = "";
    let i = 0;

    function helper(num){
        if(num == 0) return ""
        else if(num < 20) return belowTwenty[num-1] + " "
        else if(num < 100) return tens[Math.floor(num/10) - 2] + " " + helper(num % 10)
        else return belowTwenty[Math.floor(num/100)-1] + " Hundred " + helper(num % 100)
    }
   


    while(num > 0){
        if(num % 1000 !==0){
            result = helper(num % 1000) + thousands[i] + " " + result
        }
        num = Math.floor(num/1000)
        i++
    }

    return result.trim();
    
};