# Runtime Results

**Results for the tinyArray**
- insert: 44.417 μs
- append: 88.25 μs

**Results for the smallArray**
- insert: 57.458 μs
- append: 112.75 μs

**Results for the mediumArray**
- insert 201.375 μs
- append 121.583 μs

**Results for the largeArray**
- insert: 9.044334 ms
- append: 556.667 μs

**Results for the extraLargeArray**
- insert: 1.071560959 s
- append: 25.417084 ms


## Results Table

| Array Type      |  Insert fn    | Append fn    |
|-----------------|---------------|--------------|
| tinyArray       | 44.417 μs     | 88.25 μs     |
| smallArray      | 57.458 μs     | 112.75 μs    |
| mediumArray     | 201.375 μs    | 121.583 μs   |
| largeArray      | 9.044334 ms   | 556.667 μs   |
| extraLargeArray | 1.071560959 s | 25.417084 ms |

### **Observation**
A pattern seen here is that as the input grows, the time to process increases as well. These functions both appear to have a time complexity of O(n). The Append function, however, seems to scale better even though it takes a bit more time handling the smaller inputs when compared to the Insert function. For the largest input, the Insert function takes about 1.07 seconds while the Append function only takes about 25.42 miliseconds. The insert function uses the unshift() method to add values to the beginning of an array. With this method, the computer must re-index each item as it shifts all items to the right to place the new value at the front of the array. The push() method used in the Append function, only has to add the value at the end of the array. This is likely why the Insert function takes more time with larger inputs compared to the Insert function.

**doublerAppend**
- Time complexity: O(n)
- Space complexity: O(n)


**doublerInsert**
- Time complexity: O(n)
- Space complexity: O(n)