/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dateArr = date.split("-")

    let days=0

    function isLeapYear(year){
        if(year % 400 == 0 || (year % 4==0 && year % 100!=0)){
            return true
        }
              return false

    }

    for(let i=0;i<Number(dateArr[1])-1;i++){
        if(i==1){
            if(isLeapYear(Number(dateArr[0]))){
                console.log("enetered")
                days+=29
            }else{
                days+=month[i]
            }
        }else{
            days+=month[i]
        }
        
    }

    return days + Number(dateArr[2])
    
};