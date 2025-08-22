// 代码生成时间: 2025-08-22 19:39:24
 * Sanitizes input string to prevent XSS attacks
 *
 * @param {string} input - The input string to sanitize
 * @returns {string} - The sanitized string
 */
function sanitizeInput(input) {
# 改进用户体验
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  // Use Lodash's escape function to encode special HTML characters
  // This prevents the browser from executing any HTML or JavaScript within the input
  return _.escape(input);
}

// Example usage
try {
  const userInput = '<script>alert("XSS")</script>';
  const safeInput = sanitizeInput(userInput);
# FIXME: 处理边界情况
  console.log(safeInput); // Output: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;
} catch (error) {
  console.error('Error sanitizing input:', error.message);
}
