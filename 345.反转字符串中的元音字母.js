/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (48.42%)
 * Likes:    65
 * Dislikes: 0
 * Total Accepted:    20.2K
 * Total Submissions: 41.6K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *
 * 示例 1:
 *
 * 输入: "hello"
 * 输出: "holle"
 *
 *
 * 示例 2:
 *
 * 输入: "leetcode"
 * 输出: "leotcede"
 *
 * 说明:
 * 元音字母不包含字母"y"。
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let checkers = 'aeiouAEIOU'
    var s= s.split('');
    let left = 0
    let right = s.length - 1
    console.log(right);
    console.log(right);
    while (left < right) {
        if (checkers.includes(s[right]) && checkers.includes(s[left])) {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            console.log(left);
            right--
        } else if (!checkers.includes(s[left])) {
            left++
        } else if (!checkers.includes(s[right])) {
            right--
        }

    }
    return s.join('')
};
console.log(reverseVowels('hello'));
// @lc code=end
