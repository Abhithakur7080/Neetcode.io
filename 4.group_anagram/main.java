class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> groupedString = new HashMap<>();
        for(String str: strs){
            char[] newArr = str.toCharArray();
            Arrays.sort(newArr);
            String sortedStr = String.valueOf(newArr);
            if(!groupedString.containsKey(sortedStr)){
                groupedString.put(sortedStr, new ArrayList<>());
            }
            groupedString.get(sortedStr).add(str);
        }
        return new ArrayList<>(groupedString.values());
    }
}