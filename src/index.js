module.exports = function getZerosCount(number) {
  let count = 0;
  let i = 5;
  while (number / i >= 1) {
    count += Math.floor(number / i);
    i *= 5;
  }
  return count;
};
