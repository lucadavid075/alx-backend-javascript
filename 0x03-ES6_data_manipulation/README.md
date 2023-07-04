# ES6 Data Manipulation

ES6 introduced several powerful features for data manipulation in JavaScript. This readme will explain some of these features, including `map`, `filter`, and `reduce` operations on arrays, as well as Typed arrays and the Set, Map, and WeakMap data structures.

## Array Manipulation

### Map

The `map` method in JavaScript allows you to transform each element of an array and create a new array with the transformed values. It takes a callback function as an argument, which is applied to each element of the original array. The `map` method returns a new array with the transformed values in the same order as the original array.

```javascript
const originalArray = [1, 2, 3, 4, 5];

const transformedArray = originalArray.map((element) => element * 2);

console.log(transformedArray); // [2, 4, 6, 8, 10]
```
### Filter

The `filter` method allows you to create a new array containing only the elements from the original array that satisfy a specific condition. It also takes a callback function as an argument, which is applied to each element of the original array. The callback function should return a Boolean value indicating whether the element should be included in the new array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((element) => element % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

### Reduce
The `reduce` method allows you to reduce an array to a single value by applying a function to each element of the array. The callback function takes two arguments: an accumulator and the current element. The accumulator stores the intermediate result of the reduction, and the function should return the updated accumulator value.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // 15
```