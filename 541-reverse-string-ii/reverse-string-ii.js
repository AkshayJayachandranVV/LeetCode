/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {

    let count = 0, array = [], check = true
    let splitValue = s.split("")
    for (i = 0; i < s.length; i++) {
        count++
        console.log(count)
        if (count == k) {
            console.log(check)
            if (check == true) {
                console.log(i)
                console.log(count)
                let spliceValue = splitValue.splice(0, k)
                let reverseValue = spliceValue.toString().split("").reverse().join("")
                console.log(reverseValue)
                for (let j = 0; j < reverseValue.length; j++) {
                    array.push(reverseValue[j])
                }
                count = 0
                check = false
            } else {
                let spliceValue = splitValue.splice(0, k)
                console.log("entry else " + spliceValue)
                for (let j = 0; j < spliceValue.length; j++) {
                    array.push(spliceValue[j])
                }
                check = true
                count = 0
            }
        }
    }

    if (splitValue.length > 0) {
        if (check) {
            let reverseValue = splitValue.join("").split("").reverse().join("");
            array.push(reverseValue);
        } else {
            array.push(splitValue.join(""));
        }
    }

    let filterValue=array.filter((val)=>val!=",")
   return filterValue.join("")
};