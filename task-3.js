function filterArray(numbers, value) {
  const biggestNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > value) {
      biggestNumbers.push(element);
    }
  }
  return biggestNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
