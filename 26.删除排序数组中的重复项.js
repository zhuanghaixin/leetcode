/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (47.62%)
 * Likes:    1239
 * Dislikes: 0
 * Total Accepted:    218.2K
 * Total Submissions: 457.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * 示例 1:
 *
 * 给定数组 arr = [1,1,2],
 *
 * 函数应该返回新的长度 2, 并且原数组 arr 的前两个元素被修改为 1, 2。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例 2:
 *
 * 给定 arr = [0,0,1,1,1,2,2,3,3,4],
 *
 * 函数应该返回新的长度 5, 并且原数组 arr 的前五个元素被修改为 0, 1, 2, 3, 4。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 *
 * 说明:
 *
 * 为什么返回数值是整数，但输出的答案是数组呢?
 *
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 *
 * 你可以想象内部操作如下:
 *
 * // arr 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(arr);
 *
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(arr[i]);
 * }
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
//数组去重
var removeDuplicates = function (arr) {
  //第一种方法  Set
  // return Array.from(new Set(arr)).length
  //第二种方法  利用for嵌套for，然后splice去重（ES5中最常用）
  // for (var i = 0; i < arr.length; i++) {
  //   for (var j = i + 1; j < arr.length; j++) {
  //     if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
  //       arr.splice(j, 1);
  //       j--
  //     }
  //   }
  // }
  // return arr.length
  //第三种 利用indexOf去重
  // var array = [];
  // for (var i = 0; i < arr.length; i++) {
  //   if (array.indexOf(arr[i]) === -1) {
  //     array.push(arr[i])
  //   }
  // }
  // return array.length;
  //第四种 sort
  // arr = arr.sort()
  // var arrry = [arr[0]];
  // for (var i = 1; i < arr.length; i++) {
  //   if (arr[i] !== arr[i - 1]) {
  //     arrry.push(arr[i]);
  //   }
  // }
  // return arrry.length;
  //第五种 双指针
  let i = 0
  for (j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
};
// 0222233
console.log(removeDuplicates([1, 1, 2]));
// @lc code=end