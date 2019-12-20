/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (51.12%)
 * Likes:    61
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 26.9K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给定一个赎金信 (ransom)
 * 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回
 * true ；否则返回 false。
 *
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
 *
 * 注意：
 *
 * 你可以假设两个字符串均只含有小写字母。
 *
 *
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 *
 *
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let check = true
   magazine=magazine.split('')
  for (let char of ransomNote) {
    if (magazine.includes(char)) {
      let index=magazine.indexOf(char)
      console.log(index);
      console.log(magazine);
      magazine.splice(index,1)
      console.log(magazine);
    } else {
      check = false
    }
  }
  return check
};
console.log(canConstruct("a", "bba"));
// @lc code=end
