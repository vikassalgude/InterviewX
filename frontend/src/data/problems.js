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
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
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
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
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
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
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
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
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
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
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
  },
  expectedOutput: {
    javascript: "true\nfalse",
    python: "True\nFalse",
    java: "true\nfalse",
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
  },
  expectedOutput: {
    javascript: "1\n4",
    python: "1\n4",
    java: "1\n4",
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
  },
  expectedOutput: {
    javascript: "[1,2,4]\n[1,0,0]",
    python: "[1, 2, 4]\n[1, 0, 0]",
    java: "[1, 2, 4]\n[1, 0, 0]",
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
  },
  expectedOutput: {
    javascript: "4\n-1",
    python: "4\n-1",
    java: "4\n-1",
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
  },
  expectedOutput: {
    javascript: "true\nfalse",
    python: "True\nFalse",
    java: "true\nfalse",
  },
},
"maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • DP",
    description: { text: "Find subarray with maximum sum.", notes: [] },
    examples: [{ input: "[-2,1,-3,4,-1,2,1]", output: "6" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "6", python: "6", java: "6" },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: { text: "Max water container.", notes: [] },
    examples: [{ input: "[1,8,6,2,5,4,8,3,7]", output: "49" }],
    constraints: ["2 ≤ n ≤ 10⁵"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "49", python: "49", java: "49" },
  },

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: { text: "Find all triplets summing to zero.", notes: [] },
    examples: [{ input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array",
    description: { text: "Return product except self.", notes: [] },
    examples: [{ input: "[1,2,3,4]", output: "[24,12,8,6]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: { text: "Find longest unique substring.", notes: [] },
    examples: [{ input: "abcabcbb", output: "3" }],
    constraints: ["0 ≤ s.length ≤ 5*10⁴"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
  },

  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: { text: "Count subarrays summing to k.", notes: [] },
    examples: [{ input: "nums=[1,1,1], k=2", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 2*10⁴"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "2", python: "2", java: "2" },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Matrix",
    description: { text: "Set rows and columns to zero.", notes: [] },
    examples: [{ input: "[[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }],
    constraints: ["1 ≤ m,n ≤ 200"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
  },

  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Matrix",
    description: { text: "Return matrix in spiral order.", notes: [] },
    examples: [{ input: "[[1,2],[3,4]]", output: "[1,2,4,3]" }],
    constraints: ["1 ≤ m,n ≤ 10"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
  },

  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Greedy",
    description: { text: "Check if last index reachable.", notes: [] },
    examples: [{ input: "[2,3,1,1,4]", output: "true" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "true", python: "True", java: "true" },
  },

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "DP",
    description: { text: "Max sum without adjacent elements.", notes: [] },
    examples: [{ input: "[1,2,3,1]", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 100"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "4", python: "4", java: "4" },
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
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "2.0\n2.5", python: "2.0\n2.5", java: "2.0\n2.5" },
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
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
    ],
    constraints: ["k == lists.length"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
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
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
    ],
    constraints: ["1 ≤ height.length ≤ 2*10⁴"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "6", python: "6", java: "6" },
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
      { input: "[2,1,5,6,2,3]", output: "10" },
    ],
    constraints: ["1 ≤ heights.length ≤ 10⁵"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "10", python: "10", java: "10" },
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
      { input: '[["1","0"],["1","0"]]', output: "2" },
    ],
    constraints: ["1 ≤ rows, cols ≤ 200"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "2", python: "2", java: "2" },
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
      { input: 'word1 = "horse", word2 = "ros"', output: "3" },
    ],
    constraints: ["1 ≤ word1.length, word2.length ≤ 500"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
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
      { input: 'begin="hit", end="cog"', output: "5" },
    ],
    constraints: ["1 ≤ wordList.length ≤ 5000"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "5", python: "5", java: "5" },
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
      { input: "nums=[1,3,-1,-3,5,3,6,7], k=3", output: "[3,3,5,5,6,7]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
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
      { input: "[1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" },
    ],
    constraints: ["Number of nodes ≤ 10⁴"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "", python: "", java: "" },
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
      { input: 's="aab", p="c*a*b"', output: "true" },
    ],
    constraints: ["1 ≤ s.length, p.length ≤ 30"],
    starterCode: { javascript: "", python: "", java: "" },
    expectedOutput: { javascript: "true", python: "True", java: "true" },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};