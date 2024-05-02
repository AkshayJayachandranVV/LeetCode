/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  var map=new Map()
  let strs=s.split(" ")
  let PatternSet=[...new Set(pattern.split(""))]
  let sSet=[...new Set(strs)]

  if(pattern.length!=strs.length){
    return false
    }


    if(PatternSet.length!=sSet.length){
        return false
    }

    for(var i=0;i<pattern.length;i++){
        if(map.has(pattern[i])  && map.get(pattern[i]) !=strs[i]){
            return false
        }
        map.set(pattern[i],strs[i])
    }

  return true

};