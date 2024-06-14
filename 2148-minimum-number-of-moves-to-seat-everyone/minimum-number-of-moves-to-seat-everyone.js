/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {

    seats.sort((a,b)=>a-b)
    students.sort((a,b)=>a-b)
    let count=0

    for(let i = 0; i < students.length; i++){
        let diff=seats[i]-students[i]
        count+=Math.abs(diff)       
    }

    return count
    
};