// Function to calculate the power of 2
export function powerOfTwo(exponent) {
    if (exponent < 0) {
      throw new Error('Exponent must be a non-negative integer');
    }
    return 2 ** exponent;
  }
  
// Function to check if a number is a power of 2
export function isPowerOfTwo(number) {
  if (number <= 0) {
    return false;
  }
  return (number & (number - 1)) === 0;
}