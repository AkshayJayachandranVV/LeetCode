/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
    let split1=list1.join(",").split(",")
    let split2=list2.join(",").split(",")
    console.log(split1)
    console.log(split2)
    let output=[],sum,min=Infinity

    for(i=0;i<split1.length;i++){
        sum=0
        if(split2.includes(split1[i])){
            sum=split2.indexOf(split1[i])+i
            if(sum<min){
                min=sum
               output=[split1[i]]
            }else if(sum==min){
                output.push(split1[i])
            }
            
        }
    }
    return output
};