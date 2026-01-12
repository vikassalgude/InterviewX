// export const PROBLEMS = {
//   "two-sum": {
//     id: "two-sum",
//     title: "Two Sum",
//     difficulty: "Easy",
//     category: "Array • Hash Table",
//     description: {
//       text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
//       notes: [
//         "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
//         "You can return the answer in any order.",
//       ],
//     },
//     examples: [
//       {
//         input: "nums = [2,7,11,15], target = 9",
//         output: "[0,1]",
//         explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
//       },
//       {
//         input: "nums = [3,2,4], target = 6",
//         output: "[1,2]",
//       },
//       {
//         input: "nums = [3,3], target = 6",
//         output: "[0,1]",
//       },
//     ],
//     constraints: [
//       "2 ≤ nums.length ≤ 10⁴",
//       "-10⁹ ≤ nums[i] ≤ 10⁹",
//       "-10⁹ ≤ target ≤ 10⁹",
//       "Only one valid answer exists",
//     ],
//     starterCode: {
//       javascript: `function twoSum(nums, target) {
//   // Write your solution here
  
// }

// // Test cases
// console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
// console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
//       python: `def twoSum(nums, target):
//     # Write your solution here
//     pass

// # Test cases
// print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
// print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
// print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
//       java: `import java.util.*;

// class Solution {
//     public static int[] twoSum(int[] nums, int target) {
//         // Write your solution here
        
//         return new int[0];
//     }
    
//     public static void main(String[] args) {
//         System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
//         System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
//         System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
//     }
// }`,
//     },
//     expectedOutput: {
//       javascript: "[0,1]\n[1,2]\n[0,1]",
//       python: "[0, 1]\n[1, 2]\n[0, 1]",
//       java: "[0, 1]\n[1, 2]\n[0, 1]",
//     },
//   },

//   "reverse-string": {
//     id: "reverse-string",
//     title: "Reverse String",
//     difficulty: "Easy",
//     category: "String • Two Pointers",
//     description: {
//       text: "Write a function that reverses a string. The input string is given as an array of characters s.",
//       notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
//     },
//     examples: [
//       {
//         input: 's = ["h","e","l","l","o"]',
//         output: '["o","l","l","e","h"]',
//       },
//       {
//         input: 's = ["H","a","n","n","a","h"]',
//         output: '["h","a","n","n","a","H"]',
//       },
//     ],
//     constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
//     starterCode: {
//       javascript: `function reverseString(s) {
//   // Write your solution here
  
// }

// // Test cases
// let test1 = ["h","e","l","l","o"];
// reverseString(test1);
// console.log(test1); // Expected: ["o","l","l","e","h"]

// let test2 = ["H","a","n","n","a","h"];
// reverseString(test2);
// console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
//       python: `def reverseString(s):
//     # Write your solution here
//     pass

// # Test cases
// test1 = ["h","e","l","l","o"]
// reverseString(test1)
// print(test1)  # Expected: ["o","l","l","e","h"]

// test2 = ["H","a","n","n","a","h"]
// reverseString(test2)
// print(test2)  # Expected: ["h","a","n","n","a","H"]`,
//       java: `import java.util.*;

// class Solution {
//     public static void reverseString(char[] s) {
//         // Write your solution here
        
//     }
    
//     public static void main(String[] args) {
//         char[] test1 = {'h','e','l','l','o'};
//         reverseString(test1);
//         System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
//         char[] test2 = {'H','a','n','n','a','h'};
//         reverseString(test2);
//         System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
//     }
// }`,
//     },
//     expectedOutput: {
//       javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
//       python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
//       java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
//     },
//   },

//   "valid-palindrome": {
//     id: "valid-palindrome",
//     title: "Valid Palindrome",
//     difficulty: "Easy",
//     category: "String • Two Pointers",
//     description: {
//       text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
//       notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
//     },
//     examples: [
//       {
//         input: 's = "A man, a plan, a canal: Panama"',
//         output: "true",
//         explanation: '"amanaplanacanalpanama" is a palindrome.',
//       },
//       {
//         input: 's = "race a car"',
//         output: "false",
//         explanation: '"raceacar" is not a palindrome.',
//       },
//       {
//         input: 's = " "',
//         output: "true",
//         explanation:
//           's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
//       },
//     ],
//     constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
//     starterCode: {
//       javascript: `function isPalindrome(s) {
//   // Write your solution here
  
// }

// // Test cases
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
// console.log(isPalindrome("race a car")); // Expected: false
// console.log(isPalindrome(" ")); // Expected: true`,
//       python: `def isPalindrome(s):
//     # Write your solution here
//     pass

// # Test cases
// print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
// print(isPalindrome("race a car"))  # Expected: False
// print(isPalindrome(" "))  # Expected: True`,
//       java: `class Solution {
//     public static boolean isPalindrome(String s) {
//         // Write your solution here
        
//         return false;
//     }
    
//     public static void main(String[] args) {
//         System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
//         System.out.println(isPalindrome("race a car")); // Expected: false
//         System.out.println(isPalindrome(" ")); // Expected: true
//     }
// }`,
//     },
//     expectedOutput: {
//       javascript: "true\nfalse\ntrue",
//       python: "True\nFalse\nTrue",
//       java: "true\nfalse\ntrue",
//     },
//   },

//   "maximum-subarray": {
//     id: "maximum-subarray",
//     title: "Maximum Subarray",
//     difficulty: "Medium",
//     category: "Array • Dynamic Programming",
//     description: {
//       text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
//       notes: [],
//     },
//     examples: [
//       {
//         input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
//         output: "6",
//         explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
//       },
//       {
//         input: "nums = [1]",
//         output: "1",
//         explanation: "The subarray [1] has the largest sum 1.",
//       },
//       {
//         input: "nums = [5,4,-1,7,8]",
//         output: "23",
//         explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
//       },
//     ],
//     constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
//     starterCode: {
//       javascript: `function maxSubArray(nums) {
//   // Write your solution here
  
// }

// // Test cases
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
// console.log(maxSubArray([1])); // Expected: 1
// console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
//       python: `def maxSubArray(nums):
//     # Write your solution here
//     pass

// # Test cases
// print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
// print(maxSubArray([1]))  # Expected: 1
// print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
//       java: `class Solution {
//     public static int maxSubArray(int[] nums) {
//         // Write your solution here
        
//         return 0;
//     }
    
//     public static void main(String[] args) {
//         System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
//         System.out.println(maxSubArray(new int[]{1})); // Expected: 1
//         System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
//     }
// }`,
//     },
//     expectedOutput: {
//       javascript: "6\n1\n23",
//       python: "6\n1\n23",
//       java: "6\n1\n23",
//     },
//   },

//   "container-with-most-water": {
//     id: "container-with-most-water",
//     title: "Container With Most Water",
//     difficulty: "Medium",
//     category: "Array • Two Pointers",
//     description: {
//       text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
//       notes: [
//         "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
//         "Return the maximum amount of water a container can store.",
//         "Notice that you may not slant the container.",
//       ],
//     },
//     examples: [
//       {
//         input: "height = [1,8,6,2,5,4,8,3,7]",
//         output: "49",
//         explanation:
//           "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
//       },
//       {
//         input: "height = [1,1]",
//         output: "1",
//       },
//     ],
//     constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
//     starterCode: {
//       javascript: `function maxArea(height) {
//   // Write your solution here
  
// }

// // Test cases
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
// console.log(maxArea([1,1])); // Expected: 1`,
//       python: `def maxArea(height):
//     # Write your solution here
//     pass

// # Test cases
// print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
// print(maxArea([1,1]))  # Expected: 1`,
//       java: `class Solution {
//     public static int maxArea(int[] height) {
//         // Write your solution here
        
//         return 0;
//     }
    
//     public static void main(String[] args) {
//         System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
//         System.out.println(maxArea(new int[]{1,1})); // Expected: 1
//     }
// }`,
//     },
//     expectedOutput: {
//       javascript: "49\n1",
//       python: "49\n1",
//       java: "49\n1",
//     },
//   },
//   "contains-duplicate": {
//   id: "contains-duplicate",
//   title: "Contains Duplicate",
//   difficulty: "Easy",
//   category: "Array • Hash Table",
//   description: {
//     text: "Given an integer array nums, return true if any value appears at least twice in the array.",
//     notes: [],
//   },
//   examples: [
//     { input: "nums = [1,2,3,1]", output: "true" },
//     { input: "nums = [1,2,3,4]", output: "false" },
//   ],
//   constraints: ["1 ≤ nums.length ≤ 10⁵"],
//   starterCode: {
//     javascript: `function containsDuplicate(nums) {
//   // Write your solution here
// }`,
//     python: `def containsDuplicate(nums):
//     pass`,
//     java: `class Solution {
//     public static boolean containsDuplicate(int[] nums) {
//         return false;
//     }
// }`,
//   },
//   expectedOutput: {
//     javascript: "true\nfalse",
//     python: "True\nFalse",
//     java: "true\nfalse",
//   },
// },

// "single-number": {
//   id: "single-number",
//   title: "Single Number",
//   difficulty: "Easy",
//   category: "Bit Manipulation • Array",
//   description: {
//     text: "Given a non-empty array of integers nums, every element appears twice except for one.",
//     notes: ["Find that single one."],
//   },
//   examples: [
//     { input: "nums = [2,2,1]", output: "1" },
//     { input: "nums = [4,1,2,1,2]", output: "4" },
//   ],
//   constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
//   starterCode: {
//     javascript: `function singleNumber(nums) {
//   // Write your solution here
// }`,
//     python: `def singleNumber(nums):
//     pass`,
//     java: `class Solution {
//     public static int singleNumber(int[] nums) {
//         return 0;
//     }
// }`,
//   },
//   expectedOutput: {
//     javascript: "1\n4",
//     python: "1\n4",
//     java: "1\n4",
//   },
// },

// "plus-one": {
//   id: "plus-one",
//   title: "Plus One",
//   difficulty: "Easy",
//   category: "Array • Math",
//   description: {
//     text: "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.",
//     notes: [],
//   },
//   examples: [
//     { input: "digits = [1,2,3]", output: "[1,2,4]" },
//     { input: "digits = [9,9]", output: "[1,0,0]" },
//   ],
//   constraints: ["1 ≤ digits.length ≤ 100"],
//   starterCode: {
//     javascript: `function plusOne(digits) {
//   // Write your solution here
// }`,
//     python: `def plusOne(digits):
//     pass`,
//     java: `class Solution {
//     public static int[] plusOne(int[] digits) {
//         return new int[0];
//     }
// }`,
//   },
//   expectedOutput: {
//     javascript: "[1,2,4]\n[1,0,0]",
//     python: "[1, 2, 4]\n[1, 0, 0]",
//     java: "[1, 2, 4]\n[1, 0, 0]",
//   },
// },

// "binary-search": {
//   id: "binary-search",
//   title: "Binary Search",
//   difficulty: "Easy",
//   category: "Array • Binary Search",
//   description: {
//     text: "Given a sorted array of integers nums and a target value, return the index if the target is found.",
//     notes: ["If not found, return -1."],
//   },
//   examples: [
//     { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
//     { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
//   ],
//   constraints: ["1 ≤ nums.length ≤ 10⁴"],
//   starterCode: {
//     javascript: `function search(nums, target) {
//   // Write your solution here
// }`,
//     python: `def search(nums, target):
//     pass`,
//     java: `class Solution {
//     public static int search(int[] nums, int target) {
//         return -1;
//     }
// }`,
//   },
//   expectedOutput: {
//     javascript: "4\n-1",
//     python: "4\n-1",
//     java: "4\n-1",
//   },
// },

// "valid-anagram": {
//   id: "valid-anagram",
//   title: "Valid Anagram",
//   difficulty: "Easy",
//   category: "Hash Table • String",
//   description: {
//     text: "Given two strings s and t, return true if t is an anagram of s.",
//     notes: [],
//   },
//   examples: [
//     { input: 's = "anagram", t = "nagaram"', output: "true" },
//     { input: 's = "rat", t = "car"', output: "false" },
//   ],
//   constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴"],
//   starterCode: {
//     javascript: `function isAnagram(s, t) {
//   // Write your solution here
// }`,
//     python: `def isAnagram(s, t):
//     pass`,
//     java: `class Solution {
//     public static boolean isAnagram(String s, String t) {
//         return false;
//     }
// }`,
//   },
//   expectedOutput: {
//     javascript: "true\nfalse",
//     python: "True\nFalse",
//     java: "true\nfalse",
//   },
// },
// "maximum-subarray": {
//     id: "maximum-subarray",
//     title: "Maximum Subarray",
//     difficulty: "Medium",
//     category: "Array • DP",
//     description: { text: "Find subarray with maximum sum.", notes: [] },
//     examples: [{ input: "[-2,1,-3,4,-1,2,1]", output: "6" }],
//     constraints: ["1 ≤ nums.length ≤ 10⁵"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "6", python: "6", java: "6" },
//   },

//   "container-with-most-water": {
//     id: "container-with-most-water",
//     title: "Container With Most Water",
//     difficulty: "Medium",
//     category: "Array • Two Pointers",
//     description: { text: "Max water container.", notes: [] },
//     examples: [{ input: "[1,8,6,2,5,4,8,3,7]", output: "49" }],
//     constraints: ["2 ≤ n ≤ 10⁵"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "49", python: "49", java: "49" },
//   },

//   "three-sum": {
//     id: "three-sum",
//     title: "3Sum",
//     difficulty: "Medium",
//     category: "Array • Two Pointers",
//     description: { text: "Find all triplets summing to zero.", notes: [] },
//     examples: [{ input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
//     constraints: ["3 ≤ nums.length ≤ 3000"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "product-of-array-except-self": {
//     id: "product-of-array-except-self",
//     title: "Product of Array Except Self",
//     difficulty: "Medium",
//     category: "Array",
//     description: { text: "Return product except self.", notes: [] },
//     examples: [{ input: "[1,2,3,4]", output: "[24,12,8,6]" }],
//     constraints: ["2 ≤ nums.length ≤ 10⁵"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "longest-substring-without-repeating-characters": {
//     id: "longest-substring-without-repeating-characters",
//     title: "Longest Substring Without Repeating Characters",
//     difficulty: "Medium",
//     category: "String • Sliding Window",
//     description: { text: "Find longest unique substring.", notes: [] },
//     examples: [{ input: "abcabcbb", output: "3" }],
//     constraints: ["0 ≤ s.length ≤ 5*10⁴"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "3", python: "3", java: "3" },
//   },

//   "subarray-sum-equals-k": {
//     id: "subarray-sum-equals-k",
//     title: "Subarray Sum Equals K",
//     difficulty: "Medium",
//     category: "Array • Prefix Sum",
//     description: { text: "Count subarrays summing to k.", notes: [] },
//     examples: [{ input: "nums=[1,1,1], k=2", output: "2" }],
//     constraints: ["1 ≤ nums.length ≤ 2*10⁴"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "2", python: "2", java: "2" },
//   },

//   "set-matrix-zeroes": {
//     id: "set-matrix-zeroes",
//     title: "Set Matrix Zeroes",
//     difficulty: "Medium",
//     category: "Matrix",
//     description: { text: "Set rows and columns to zero.", notes: [] },
//     examples: [{ input: "[[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }],
//     constraints: ["1 ≤ m,n ≤ 200"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "spiral-matrix": {
//     id: "spiral-matrix",
//     title: "Spiral Matrix",
//     difficulty: "Medium",
//     category: "Matrix",
//     description: { text: "Return matrix in spiral order.", notes: [] },
//     examples: [{ input: "[[1,2],[3,4]]", output: "[1,2,4,3]" }],
//     constraints: ["1 ≤ m,n ≤ 10"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "jump-game": {
//     id: "jump-game",
//     title: "Jump Game",
//     difficulty: "Medium",
//     category: "Greedy",
//     description: { text: "Check if last index reachable.", notes: [] },
//     examples: [{ input: "[2,3,1,1,4]", output: "true" }],
//     constraints: ["1 ≤ nums.length ≤ 10⁴"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "true", python: "True", java: "true" },
//   },

//   "house-robber": {
//     id: "house-robber",
//     title: "House Robber",
//     difficulty: "Medium",
//     category: "DP",
//     description: { text: "Max sum without adjacent elements.", notes: [] },
//     examples: [{ input: "[1,2,3,1]", output: "4" }],
//     constraints: ["1 ≤ nums.length ≤ 100"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "4", python: "4", java: "4" },
//   },
//   "median-of-two-sorted-arrays": {
//     id: "median-of-two-sorted-arrays",
//     title: "Median of Two Sorted Arrays",
//     difficulty: "Hard",
//     category: "Array • Binary Search",
//     description: {
//       text: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
//       notes: ["The overall run time complexity should be O(log (m+n))."],
//     },
//     examples: [
//       { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" },
//       { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5" },
//     ],
//     constraints: ["0 ≤ m,n ≤ 1000"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "2.0\n2.5", python: "2.0\n2.5", java: "2.0\n2.5" },
//   },

//   "merge-k-sorted-lists": {
//     id: "merge-k-sorted-lists",
//     title: "Merge k Sorted Lists",
//     difficulty: "Hard",
//     category: "Linked List • Heap",
//     description: {
//       text: "Merge k sorted linked lists and return it as one sorted list.",
//       notes: [],
//     },
//     examples: [
//       { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
//     ],
//     constraints: ["k == lists.length"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "trapping-rain-water": {
//     id: "trapping-rain-water",
//     title: "Trapping Rain Water",
//     difficulty: "Hard",
//     category: "Array • Two Pointers",
//     description: {
//       text: "Compute how much water can be trapped after raining.",
//       notes: [],
//     },
//     examples: [
//       { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
//     ],
//     constraints: ["1 ≤ height.length ≤ 2*10⁴"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "6", python: "6", java: "6" },
//   },

//   "largest-rectangle-in-histogram": {
//     id: "largest-rectangle-in-histogram",
//     title: "Largest Rectangle in Histogram",
//     difficulty: "Hard",
//     category: "Stack • Array",
//     description: {
//       text: "Find the area of the largest rectangle in the histogram.",
//       notes: [],
//     },
//     examples: [
//       { input: "[2,1,5,6,2,3]", output: "10" },
//     ],
//     constraints: ["1 ≤ heights.length ≤ 10⁵"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "10", python: "10", java: "10" },
//   },

//   "maximal-rectangle": {
//     id: "maximal-rectangle",
//     title: "Maximal Rectangle",
//     difficulty: "Hard",
//     category: "Matrix • Stack",
//     description: {
//       text: "Find the largest rectangle containing only 1s in a binary matrix.",
//       notes: [],
//     },
//     examples: [
//       { input: '[["1","0"],["1","0"]]', output: "2" },
//     ],
//     constraints: ["1 ≤ rows, cols ≤ 200"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "2", python: "2", java: "2" },
//   },

//   "edit-distance": {
//     id: "edit-distance",
//     title: "Edit Distance",
//     difficulty: "Hard",
//     category: "Dynamic Programming",
//     description: {
//       text: "Compute the minimum number of operations to convert word1 to word2.",
//       notes: ["Operations include insert, delete, replace."],
//     },
//     examples: [
//       { input: 'word1 = "horse", word2 = "ros"', output: "3" },
//     ],
//     constraints: ["1 ≤ word1.length, word2.length ≤ 500"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "3", python: "3", java: "3" },
//   },

//   "word-ladder": {
//     id: "word-ladder",
//     title: "Word Ladder",
//     difficulty: "Hard",
//     category: "BFS • Graph",
//     description: {
//       text: "Return the length of the shortest transformation sequence.",
//       notes: [],
//     },
//     examples: [
//       { input: 'begin="hit", end="cog"', output: "5" },
//     ],
//     constraints: ["1 ≤ wordList.length ≤ 5000"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "5", python: "5", java: "5" },
//   },

//   "sliding-window-maximum": {
//     id: "sliding-window-maximum",
//     title: "Sliding Window Maximum",
//     difficulty: "Hard",
//     category: "Deque • Sliding Window",
//     description: {
//       text: "Return the maximum in each sliding window.",
//       notes: [],
//     },
//     examples: [
//       { input: "nums=[1,3,-1,-3,5,3,6,7], k=3", output: "[3,3,5,5,6,7]" },
//     ],
//     constraints: ["1 ≤ nums.length ≤ 10⁵"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "serialize-and-deserialize-binary-tree": {
//     id: "serialize-and-deserialize-binary-tree",
//     title: "Serialize and Deserialize Binary Tree",
//     difficulty: "Hard",
//     category: "Tree • DFS",
//     description: {
//       text: "Design an algorithm to serialize and deserialize a binary tree.",
//       notes: [],
//     },
//     examples: [
//       { input: "[1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" },
//     ],
//     constraints: ["Number of nodes ≤ 10⁴"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "", python: "", java: "" },
//   },

//   "regular-expression-matching": {
//     id: "regular-expression-matching",
//     title: "Regular Expression Matching",
//     difficulty: "Hard",
//     category: "Dynamic Programming • String",
//     description: {
//       text: "Implement regular expression matching with '.' and '*'.",
//       notes: [],
//     },
//     examples: [
//       { input: 's="aab", p="c*a*b"', output: "true" },
//     ],
//     constraints: ["1 ≤ s.length, p.length ≤ 30"],
//     starterCode: { javascript: "", python: "", java: "" },
//     expectedOutput: { javascript: "true", python: "True", java: "true" },
//   },
// };







export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> result1 = twoSum(nums1, 9);
    cout << "[" << result1[0] << "," << result1[1] << "]" << endl;
    
    vector<int> nums2 = {3, 2, 4};
    vector<int> result2 = twoSum(nums2, 6);
    cout << "[" << result2[0] << "," << result2[1] << "]" << endl;
    
    vector<int> nums3 = {3, 3};
    vector<int> result3 = twoSum(nums3, 6);
    cout << "[" << result3[0] << "," << result3[1] << "]" << endl;
    
    return 0;
}`,
      go: `package main

import "fmt"

func twoSum(nums []int, target int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) // Expected: [0 1]
    fmt.Println(twoSum([]int{3, 2, 4}, 6)) // Expected: [1 2]
    fmt.Println(twoSum([]int{3, 3}, 6)) // Expected: [0 1]
}`,
      csharp: `using System;

public class Solution {
    public static int[] TwoSum(int[] nums, int target) {
        // Write your solution here
        
    }
    
    public static void Main(string[] args) {
        Console.WriteLine("[{0}]", string.Join(",", TwoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0,1]
        Console.WriteLine("[{0}]", string.Join(",", TwoSum(new int[]{3, 2, 4}, 6))); // Expected: [1,2]
        Console.WriteLine("[{0}]", string.Join(",", TwoSum(new int[]{3, 3}, 6))); // Expected: [0,1]
    }
}`
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0,1]\n[1,2]\n[0,1]",
      go: "[0 1]\n[1 2]\n[0 1]",
      csharp: "[0,1]\n[1,2]\n[0,1]"
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
    
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    for(char c : test1) cout << c;
    cout << endl; // Expected: olleh
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    for(char c : test2) cout << c;
    cout << endl; // Expected: hannaH
    
    return 0;
}`,
      go: `package main

import "fmt"

func reverseString(s []byte) {
    // Write your solution here
    
}

func main() {
    test1 := []byte{'h','e','l','l','o'}
    reverseString(test1)
    fmt.Println(string(test1)) // Expected: olleh
    
    test2 := []byte{'H','a','n','n','a','h'}
    reverseString(test2)
    fmt.Println(string(test2)) // Expected: hannaH
}`,
      csharp: `using System;

public class Solution {
    public static void ReverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void Main(string[] args) {
        char[] test1 = {'h','e','l','l','o'};
        ReverseString(test1);
        Console.WriteLine(new string(test1)); // Expected: olleh
        
        char[] test2 = {'H','a','n','n','a','h'};
        ReverseString(test2);
        Console.WriteLine(new string(test2)); // Expected: hannaH
    }
}`
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "olleh\nhannaH",
      go: "olleh\nhannaH",
      csharp: "olleh\nhannaH"
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;
    cout << (isPalindrome("race a car") ? "true" : "false") << endl;
    cout << (isPalindrome(" ") ? "true" : "false") << endl;
    return 0;
}`,
      go: `package main

import "fmt"

func isPalindrome(s string) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isPalindrome("A man, a plan, a canal: Panama"))
    fmt.Println(isPalindrome("race a car"))
    fmt.Println(isPalindrome(" "))
}`,
      csharp: `using System;

public class Solution {
    public static bool IsPalindrome(string s) {
        // Write your solution here
        return false;
    }
    
    public static void Main(string[] args) {
        Console.WriteLine(IsPalindrome("A man, a plan, a canal: Panama"));
        Console.WriteLine(IsPalindrome("race a car"));
        Console.WriteLine(IsPalindrome(" "));
    }
}`
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
      go: "true\nfalse\ntrue",
      csharp: "True\nFalse\nTrue"
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(nums1) << endl; // Expected: 6
    
    vector<int> nums2 = {1};
    cout << maxSubArray(nums2) << endl; // Expected: 1
    
    vector<int> nums3 = {5,4,-1,7,8};
    cout << maxSubArray(nums3) << endl; // Expected: 23
    
    return 0;
}`,
      go: `package main

import "fmt"

func maxSubArray(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(maxSubArray([]int{-2,1,-3,4,-1,2,1,-5,4}))
    fmt.Println(maxSubArray([]int{1}))
    fmt.Println(maxSubArray([]int{5,4,-1,7,8}))
}`,
      csharp: `using System;

public class Solution {
    public static int MaxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void Main(string[] args) {
        Console.WriteLine(MaxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        Console.WriteLine(MaxSubArray(new int[]{1}));
        Console.WriteLine(MaxSubArray(new int[]{5,4,-1,7,8}));
    }
}`
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
      go: "6\n1\n23",
      csharp: "6\n1\n23"
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(height1) << endl; // Expected: 49
    
    vector<int> height2 = {1,1};
    cout << maxArea(height2) << endl; // Expected: 1
    
    return 0;
}`,
      go: `package main

import "fmt"

func maxArea(height []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(maxArea([]int{1,8,6,2,5,4,8,3,7}))
    fmt.Println(maxArea([]int{1,1}))
}`,
      csharp: `using System;

public class Solution {
    public static int MaxArea(int[] height) {
        // Write your solution here
        return 0;
    }
    
    public static void Main(string[] args) {
        Console.WriteLine(MaxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        Console.WriteLine(MaxArea(new int[]{1,1}));
    }
}`
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
      go: "49\n1",
      csharp: "49\n1"
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}`,
      python: `def containsDuplicate(nums):
    pass`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        return false;
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}`,
      go: `package main

func containsDuplicate(nums []int) bool {
    // Write your solution here
    return false
}`,
      csharp: `using System;

public class Solution {
    public static bool ContainsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      go: "true\nfalse",
      csharp: "True\nFalse"
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Bit Manipulation • Array",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one.",
      notes: ["Find that single one."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}`,
      python: `def singleNumber(nums):
    pass`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        return 0;
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func singleNumber(nums []int) int {
    // Write your solution here
    return 0
}`,
      csharp: `using System;

public class Solution {
    public static int SingleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "1\n4",
      python: "1\n4",
      java: "1\n4",
      cpp: "1\n4",
      go: "1\n4",
      csharp: "1\n4"
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.",
      notes: [],
    },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [9,9]", output: "[1,0,0]" },
    ],
    constraints: ["1 ≤ digits.length ≤ 100"],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
}`,
      python: `def plusOne(digits):
    pass`,
      java: `class Solution {
    public static int[] plusOne(int[] digits) {
        return new int[0];
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> plusOne(vector<int>& digits) {
    // Write your solution here
    return {};
}`,
      go: `package main

func plusOne(digits []int) []int {
    // Write your solution here
    return []int{}
}`,
      csharp: `using System;

public class Solution {
    public static int[] PlusOne(int[] digits) {
        // Write your solution here
        return new int[0];
    }
}`
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[1,0,0]",
      python: "[1, 2, 4]\n[1, 0, 0]",
      java: "[1, 2, 4]\n[1, 0, 0]",
      cpp: "[1,2,4]\n[1,0,0]",
      go: "[1 2 4]\n[1 0 0]",
      csharp: "[1,2,4]\n[1,0,0]"
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array of integers nums and a target value, return the index if the target is found.",
      notes: ["If not found, return -1."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
}`,
      python: `def search(nums, target):
    pass`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        return -1;
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}`,
      go: `package main

func search(nums []int, target int) int {
    // Write your solution here
    return -1
}`,
      csharp: `using System;

public class Solution {
    public static int Search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
      go: "4\n-1",
      csharp: "4\n-1"
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "Hash Table • String",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s.",
      notes: [],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
}`,
      python: `def isAnagram(s, t):
    pass`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        return false;
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}`,
      go: `package main

func isAnagram(s string, t string) bool {
    // Write your solution here
    return false
}`,
      csharp: `using System;

public class Solution {
    public static bool IsAnagram(string s, string t) {
        // Write your solution here
        return false;
    }
}`
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      go: "true\nfalse",
      csharp: "True\nFalse"
    },
  },

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: { 
      text: "Find all triplets summing to zero.", 
      notes: [] 
    },
    examples: [
      { 
        input: "[-1,0,1,2,-1,-4]", 
        output: "[[-1,-1,2],[-1,0,1]]" 
      }
    ],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}`,
      python: `def threeSum(nums):
    pass`,
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        return new ArrayList<>();
    }
}`,
      cpp: `#include <vector>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}`,
      go: `package main

func threeSum(nums []int) [][]int {
    // Write your solution here
    return [][]int{}
}`,
      csharp: `using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        // Write your solution here
        return new List<IList<int>>();
    }
}`
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]",
      cpp: "[[-1,-1,2],[-1,0,1]]",
      go: "[[-1 -1 2] [-1 0 1]]",
      csharp: "[[-1,-1,2],[-1,0,1]]"
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array",
    description: { 
      text: "Return product except self.", 
      notes: [] 
    },
    examples: [
      { 
        input: "[1,2,3,4]", 
        output: "[24,12,8,6]" 
      }
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}`,
      python: `def productExceptSelf(nums):
    pass`,
      java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        return new int[0];
    }
}`,
      cpp: `#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}`,
      go: `package main

func productExceptSelf(nums []int) []int {
    // Write your solution here
    return []int{}
}`,
      csharp: `public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24, 12, 8, 6]",
      java: "[24, 12, 8, 6]",
      cpp: "[24,12,8,6]",
      go: "[24 12 8 6]",
      csharp: "[24,12,8,6]"
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: { 
      text: "Find longest unique substring.", 
      notes: [] 
    },
    examples: [
      { 
        input: "abcabcbb", 
        output: "3" 
      }
    ],
    constraints: ["0 ≤ s.length ≤ 5*10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}`,
      python: `def lengthOfLongestSubstring(s):
    pass`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        return 0;
    }
}`,
      cpp: `#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func lengthOfLongestSubstring(s string) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int LengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
      go: "3",
      csharp: "3"
    },
  },

  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: { 
      text: "Count subarrays summing to k.", 
      notes: [] 
    },
    examples: [
      { 
        input: "nums=[1,1,1], k=2", 
        output: "2" 
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 2*10⁴"],
    starterCode: {
      javascript: `function subarraySum(nums, k) {
  // Write your solution here
}`,
      python: `def subarraySum(nums, k):
    pass`,
      java: `class Solution {
    public int subarraySum(int[] nums, int k) {
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func subarraySum(nums []int, k int) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int SubarraySum(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
      cpp: "2",
      go: "2",
      csharp: "2"
    },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Matrix",
    description: { 
      text: "Set rows and columns to zero.", 
      notes: [] 
    },
    examples: [
      { 
        input: "[[1,1,1],[1,0,1],[1,1,1]]", 
        output: "[[1,0,1],[0,0,0],[1,0,1]]" 
      }
    ],
    constraints: ["1 ≤ m,n ≤ 200"],
    starterCode: {
      javascript: `function setZeroes(matrix) {
  // Write your solution here
}`,
      python: `def setZeroes(matrix):
    pass`,
      java: `class Solution {
    public void setZeroes(int[][] matrix) {
        // Write your solution here
    }
}`,
      cpp: `#include <vector>
using namespace std;

void setZeroes(vector<vector<int>>& matrix) {
    // Write your solution here
}`,
      go: `package main

func setZeroes(matrix [][]int) {
    // Write your solution here
}`,
      csharp: `public class Solution {
    public void SetZeroes(int[][] matrix) {
        // Write your solution here
    }
}`
    },
    expectedOutput: {
      javascript: "[[1,0,1],[0,0,0],[1,0,1]]",
      python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
      java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
      cpp: "[[1,0,1],[0,0,0],[1,0,1]]",
      go: "[[1 0 1] [0 0 0] [1 0 1]]",
      csharp: "[[1,0,1],[0,0,0],[1,0,1]]"
    },
  },

  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Matrix",
    description: { 
      text: "Return matrix in spiral order.", 
      notes: [] 
    },
    examples: [
      { 
        input: "[[1,2],[3,4]]", 
        output: "[1,2,4,3]" 
      }
    ],
    constraints: ["1 ≤ m,n ≤ 10"],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
  // Write your solution here
}`,
      python: `def spiralOrder(matrix):
    pass`,
      java: `class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        return new ArrayList<>();
    }
}`,
      cpp: `#include <vector>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    // Write your solution here
    return {};
}`,
      go: `package main

func spiralOrder(matrix [][]int) []int {
    // Write your solution here
    return []int{}
}`,
      csharp: `public class Solution {
    public IList<int> SpiralOrder(int[][] matrix) {
        // Write your solution here
        return new List<int>();
    }
}`
    },
    expectedOutput: {
      javascript: "[1,2,4,3]",
      python: "[1, 2, 4, 3]",
      java: "[1, 2, 4, 3]",
      cpp: "[1,2,4,3]",
      go: "[1 2 4 3]",
      csharp: "[1,2,4,3]"
    },
  },

  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Greedy",
    description: { 
      text: "Check if last index reachable.", 
      notes: [] 
    },
    examples: [
      { 
        input: "[2,3,1,1,4]", 
        output: "true" 
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here
}`,
      python: `def canJump(nums):
    pass`,
      java: `class Solution {
    public boolean canJump(int[] nums) {
        return false;
    }
}`,
      cpp: `#include <vector>
using namespace std;

bool canJump(vector<int>& nums) {
    // Write your solution here
    return false;
}`,
      go: `package main

func canJump(nums []int) bool {
    // Write your solution here
    return false
}`,
      csharp: `public class Solution {
    public bool CanJump(int[] nums) {
        // Write your solution here
        return false;
    }
}`
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      go: "true",
      csharp: "True"
    },
  },

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "DP",
    description: { 
      text: "Max sum without adjacent elements.", 
      notes: [] 
    },
    examples: [
      { 
        input: "[1,2,3,1]", 
        output: "4" 
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 100"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
}`,
      python: `def rob(nums):
    pass`,
      java: `class Solution {
    public int rob(int[] nums) {
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func rob(nums []int) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int Rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
      cpp: "4",
      go: "4",
      csharp: "4"
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be O(log (m+n))."],
    },
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5" },
    ],
    constraints: ["0 ≤ m,n ≤ 1000"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}`,
      python: `def findMedianSortedArrays(nums1, nums2):
    pass`,
      java: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        return 0.0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}`,
      go: `package main

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    // Write your solution here
    return 0.0
}`,
      csharp: `public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }
}`
    },
    expectedOutput: {
      javascript: "2.0\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
      cpp: "2.0\n2.5",
      go: "2.0\n2.5",
      csharp: "2.0\n2.5"
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Heap",
    description: {
      text: "Merge k sorted linked lists and return it as one sorted list.",
      notes: [],
    },
    examples: [
      { 
        input: "[[1,4,5],[1,3,4],[2,6]]", 
        output: "[1,1,2,3,4,4,5,6]" 
      }
    ],
    constraints: ["k == lists.length"],
    starterCode: {
      javascript: `function mergeKLists(lists) {
  // Write your solution here
}`,
      python: `def mergeKLists(lists):
    pass`,
      java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        return null;
    }
}`,
      cpp: `struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    // Write your solution here
    return nullptr;
}`,
      go: `type ListNode struct {
    Val int
    Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
    // Write your solution here
    return nil
}`,
      csharp: `public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
}`
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]",
      python: "[1,1,2,3,4,4,5,6]",
      java: "[1,1,2,3,4,4,5,6]",
      cpp: "[1,1,2,3,4,4,5,6]",
      go: "[1 1 2 3 4 4 5 6]",
      csharp: "[1,1,2,3,4,4,5,6]"
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",
    description: {
      text: "Compute how much water can be trapped after raining.",
      notes: [],
    },
    examples: [
      { 
        input: "[0,1,0,2,1,0,1,3,2,1,2,1]", 
        output: "6" 
      }
    ],
    constraints: ["1 ≤ height.length ≤ 2*10⁴"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
}`,
      python: `def trap(height):
    pass`,
      java: `class Solution {
    public int trap(int[] height) {
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func trap(height []int) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int Trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
      cpp: "6",
      go: "6",
      csharp: "6"
    },
  },

  "largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Stack • Array",
    description: {
      text: "Find the area of the largest rectangle in the histogram.",
      notes: [],
    },
    examples: [
      { 
        input: "[2,1,5,6,2,3]", 
        output: "10" 
      }
    ],
    constraints: ["1 ≤ heights.length ≤ 10⁵"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {
  // Write your solution here
}`,
      python: `def largestRectangleArea(heights):
    pass`,
      java: `class Solution {
    public int largestRectangleArea(int[] heights) {
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

int largestRectangleArea(vector<int>& heights) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func largestRectangleArea(heights []int) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int LargestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "10",
      python: "10",
      java: "10",
      cpp: "10",
      go: "10",
      csharp: "10"
    },
  },

  "maximal-rectangle": {
    id: "maximal-rectangle",
    title: "Maximal Rectangle",
    difficulty: "Hard",
    category: "Matrix • Stack",
    description: {
      text: "Find the largest rectangle containing only 1s in a binary matrix.",
      notes: [],
    },
    examples: [
      { 
        input: '[["1","0"],["1","0"]]', 
        output: "2" 
      }
    ],
    constraints: ["1 ≤ rows, cols ≤ 200"],
    starterCode: {
      javascript: `function maximalRectangle(matrix) {
  // Write your solution here
}`,
      python: `def maximalRectangle(matrix):
    pass`,
      java: `class Solution {
    public int maximalRectangle(char[][] matrix) {
        return 0;
    }
}`,
      cpp: `#include <vector>
#include <string>
using namespace std;

int maximalRectangle(vector<vector<char>>& matrix) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func maximalRectangle(matrix [][]byte) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int MaximalRectangle(char[][] matrix) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
      cpp: "2",
      go: "2",
      csharp: "2"
    },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming",
    description: {
      text: "Compute the minimum number of operations to convert word1 to word2.",
      notes: ["Operations include insert, delete, replace."],
    },
    examples: [
      { 
        input: 'word1 = "horse", word2 = "ros"', 
        output: "3" 
      }
    ],
    constraints: ["1 ≤ word1.length, word2.length ≤ 500"],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
}`,
      python: `def minDistance(word1, word2):
    pass`,
      java: `class Solution {
    public int minDistance(String word1, String word2) {
        return 0;
    }
}`,
      cpp: `#include <string>
using namespace std;

int minDistance(string word1, string word2) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func minDistance(word1 string, word2 string) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int MinDistance(string word1, string word2) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
      go: "3",
      csharp: "3"
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "BFS • Graph",
    description: {
      text: "Return the length of the shortest transformation sequence.",
      notes: [],
    },
    examples: [
      { 
        input: 'begin="hit", end="cog"', 
        output: "5" 
      }
    ],
    constraints: ["1 ≤ wordList.length ≤ 5000"],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}`,
      python: `def ladderLength(beginWord, endWord, wordList):
    pass`,
      java: `class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        return 0;
    }
}`,
      cpp: `#include <vector>
#include <string>
using namespace std;

int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    // Write your solution here
    return 0;
}`,
      go: `package main

func ladderLength(beginWord string, endWord string, wordList []string) int {
    // Write your solution here
    return 0
}`,
      csharp: `public class Solution {
    public int LadderLength(string beginWord, string endWord, IList<string> wordList) {
        // Write your solution here
        return 0;
    }
}`
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
      cpp: "5",
      go: "5",
      csharp: "5"
    },
  },

  "sliding-window-maximum": {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Deque • Sliding Window",
    description: {
      text: "Return the maximum in each sliding window.",
      notes: [],
    },
    examples: [
      { 
        input: "nums=[1,3,-1,-3,5,3,6,7], k=3", 
        output: "[3,3,5,5,6,7]" 
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
  // Write your solution here
}`,
      python: `def maxSlidingWindow(nums, k):
    pass`,
      java: `class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        return new int[0];
    }
}`,
      cpp: `#include <vector>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    // Write your solution here
    return {};
}`,
      go: `package main

func maxSlidingWindow(nums []int, k int) []int {
    // Write your solution here
    return []int{}
}`,
      csharp: `public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`
    },
    expectedOutput: {
      javascript: "[3,3,5,5,6,7]",
      python: "[3, 3, 5, 5, 6, 7]",
      java: "[3, 3, 5, 5, 6, 7]",
      cpp: "[3,3,5,5,6,7]",
      go: "[3 3 5 5 6 7]",
      csharp: "[3,3,5,5,6,7]"
    },
  },

  "serialize-and-deserialize-binary-tree": {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "Tree • DFS",
    description: {
      text: "Design an algorithm to serialize and deserialize a binary tree.",
      notes: [],
    },
    examples: [
      { 
        input: "[1,2,3,null,null,4,5]", 
        output: "[1,2,3,null,null,4,5]" 
      }
    ],
    constraints: ["Number of nodes ≤ 10⁴"],
    starterCode: {
      javascript: `function serialize(root) {
  // Write your solution here
}

function deserialize(data) {
  // Write your solution here
}`,
      python: `def serialize(root):
    pass

def deserialize(data):
    pass`,
      java: `public class Codec {
    public String serialize(TreeNode root) {
        return "";
    }
    public TreeNode deserialize(String data) {
        return null;
    }
}`,
      cpp: `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Codec {
public:
    string serialize(TreeNode* root) {
        return "";
    }
    TreeNode* deserialize(string data) {
        return nullptr;
    }
};`,
      go: `type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

type Codec struct{}

func Constructor() Codec {
    return Codec{}
}

func (this *Codec) serialize(root *TreeNode) string {
    return ""
}

func (this *Codec) deserialize(data string) *TreeNode {
    return nil
}`,
      csharp: `public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}

public class Codec {
    public string serialize(TreeNode root) {
        return "";
    }
    public TreeNode deserialize(string data) {
        return null;
    }
}`
    },
    expectedOutput: {
      javascript: "[1,2,3,null,null,4,5]",
      python: "[1,2,3,null,null,4,5]",
      java: "[1,2,3,null,null,4,5]",
      cpp: "[1,2,3,null,null,4,5]",
      go: "[1,2,3,null,null,4,5]",
      csharp: "[1,2,3,null,null,4,5]"
    },
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Implement regular expression matching with '.' and '*'.",
      notes: [],
    },
    examples: [
      { 
        input: 's="aab", p="c*a*b"', 
        output: "true" 
      }
    ],
    constraints: ["1 ≤ s.length, p.length ≤ 30"],
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Write your solution here
}`,
      python: `def isMatch(s, p):
    pass`,
      java: `class Solution {
    public boolean isMatch(String s, String p) {
        return false;
    }
}`,
      cpp: `#include <string>
using namespace std;

bool isMatch(string s, string p) {
    // Write your solution here
    return false;
}`,
      go: `package main

func isMatch(s string, p string) bool {
    // Write your solution here
    return false
}`,
      csharp: `public class Solution {
    public bool IsMatch(string s, string p) {
        // Write your solution here
        return false;
    }
}`
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      go: "true",
      csharp: "True"
    },
  }
};


export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
    extension: "js",
    runner: "node",
    version: "ES2022",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
    extension: "py",
    runner: "python3",
    version: "3.11",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
    extension: "java",
    runner: "javac & java",
    version: "JDK 21",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
    extension: "cpp",
    runner: "g++",
    version: "C++20",
  },
  go: {
    name: "Go",
    icon: "/go.png",
    monacoLang: "go",
    extension: "go",
    runner: "go run",
    version: "1.21",
  },
  csharp: {
    name: "C#",
    icon: "/csharp.png",
    monacoLang: "csharp",
    extension: "cs",
    runner: "dotnet",
    version: ".NET 8",
  },
};