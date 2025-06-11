This repository contains a collection of JavaScript algorithms with comprehensive unit tests.

## 📦 Included Functions

1. **`sortDescending(arr)`** - Sorts an array in descending order using selection sort
2. **`maxSubarraySum(arr, num)`** - Finds the maximum sum of any subarray of length `num`
3. **`sumEvenNumbers(obj)`** - Sums all even numbers in a nested object structure

## 🚀 Installation

```bash
git clone https://github.com/Abin-Septian/keda-test-1
cd javascript-algorithms
npm install
```

## 🧪 Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate test coverage report:
```bash
npm run test:coverage
```

## 📝 Usage Examples

### sortDescending
```javascript
const { sortDescending } = require('./sortFunctions');

console.log(sortDescending([5, 2, 9, 1, 5])); 
// Output: [9, 5, 5, 2, 1]
```

### maxSubarraySum
```javascript
const { maxSubarraySum } = require('./sortFunctions');

console.log(maxSubarraySum([100, 200, 300, 400], 2));
// Output: 700
```

### sumEvenNumbers
```javascript
const { sumEvenNumbers } = require('./sortFunctions');

const input = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } }
};

console.log(sumEvenNumbers(input));
// Output: 6
```

## � Coding Standards

- ESLint with Airbnb style guide
- 100% test coverage
- Immutable operations where possible
- Clear JSDoc comments

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)