/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const map = new Map();

    for(let i=0; i<s.length; i++){
        const c = s.charAt(i);
        if(map.has(c)){
            map.set(c, map.get(c)+1);
        }
        else{
            map.set(c, 1);
        }
    }

    for(let i=0; i<t.length; i++){
        const c = t.charAt(i);
        if(map.get(c)!==null){
            if(map.get(c)==1){
                map.delete(c);
            }
            else{
                map.set(c, map.get(c)-1);
            }
        }
        else{
            return false;
        }
    }
    return map.size===0;
};