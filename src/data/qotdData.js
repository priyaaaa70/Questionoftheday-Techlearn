export const qotd = {
  id: 328,
  title: "Odd Even Linked List",
  difficulty: "Medium",

  description: `
Given the head of a singly linked list, group all nodes with odd indices together,
followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the odd and even groups should remain
the same as in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
  `.trim(),

  constraints: [
    "0 ≤ number of nodes ≤ 10⁴",
    "-10⁶ ≤ Node.val ≤ 10⁶"
  ]
};
