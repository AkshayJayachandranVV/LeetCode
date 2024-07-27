/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let value = "balloon"
    let flag
    let count=0, j=0
    
    let len=Math.floor(text.length/7)

    let array = text.split("")

    while(j<=len){
        flag=false
        for(let i=0;i<value.length;i++){
               if(array.includes(value[i])){
                    let index=array.indexOf(value[i])
                    array.splice(index,1)
               }else{
                  flag=true
                  break;
               }
            }
            if(flag==true){
                break
            }else{
                count++
            }
            j++
    }

    return count
    

};