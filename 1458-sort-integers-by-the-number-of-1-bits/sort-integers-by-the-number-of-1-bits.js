/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    let array=[]
    
    for(let i=0;i<arr.length;i++){
        let toBits=arr[i].toString(2)
        let splitArr= toBits.split("")
        // console.log(splitArr)
         let count=0
        let mapArr = splitArr.map((val)=>{
            if(val==1){
                count++;
            }
        })
        array.push([arr[i],count])
    }

    // console.log(array)



    let sortArr = array.sort((a,b)=>{
        if (a[1] === b[1]) {
            return a[0] - b[0]; 
        } else {
            return a[1] - b[1]; 
        }
    })

    let output=[]

    for(let j=0;j<sortArr.length;j++){
        output.push(sortArr[j][0])
    }

    return output


};