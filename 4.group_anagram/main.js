/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groupedString = new Map();

    for(const str of strs){
        const newArr = str.split('');
        newArr.sort();
        const sortedArr = newArr.join('');

        if(!groupedString.has(sortedArr)){
            groupedString.set(sortedArr, []);
        }
        groupedString.get(sortedArr).push(str);
    }
    return Array.from(groupedString.values());
}