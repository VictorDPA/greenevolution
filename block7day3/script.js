const sum = (a, b) => a + b;
const div = (a, b) => a / b;
module.exports = sum;

function summationOf(num) {
  if (num === 1) return num;
  return num + summationOf(num - 1);
}

