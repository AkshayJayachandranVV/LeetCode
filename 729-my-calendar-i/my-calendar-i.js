
var MyCalendar = function() {
    this.bookings = [];  
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    
    for(let event of this.bookings){
        let [existingStart,existingEnd] = event

        if(start <  existingEnd  &&  end > existingStart){
            return false
        }
    }

    this.bookings.push([start,end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */