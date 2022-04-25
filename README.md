# urban-lamp
Dynamic programming practice (nodejs)

## Lesson 1 - Fiboncacci

Create a fiboncacci function that gives the fiboncacci number for a position n.
  - Create a function using recursion. (time = O(2^n))
  - Create a function using memoization. (time = O(2n))
  
## Lesson 2 - Grid traveller

Create a function that gives the different move combinations for a traveller moving through a grid of m rows and n columns. The traveller can only move once down or right at a time. The traveller starts in the top left and must end in the bottom right square.
  - Create a function using recursion. (time = O(2^m+n))
  - Create a function using memoization. (time = O(m+n))

## Lesson 3 - Target sum

### Can sum?
Create a function that takes a number `n` and an array `numbers`. Check if the values within the `numbers` can sum up to `n`. The values within `numbers` may be reused. Output expected: true if possible, false otherwise.
  - Create a function using recursion. (time = O(n^m))
  - Create a function using memoization. (time = O(n*m))
  
### How sum?
Create a function that takes a number `n` and an array `numbers`. Return the first possible combination of numbers that make up `n` otherwise return null.
  - Create a function using recursion. (time = O(n^m * m)) *array copy adds overhead (m)*
  - Create a function using memoization. (time = O(n*m^2)) *array copy adds overhead (m)*
  
### Best sum?
Create a function that takes a number `n` and an array `numbers`. Return the shortest combination using `numbers` to create `n`. If two combintions are equal in length, return either one. If no combinations exist, return null.
  - Create a function using recursion. (time = O(n^m * m)) *array copy adds overhead (m)*
  - Create a function using memoization. (time = O(n*m^2)) *array copy adds overhead (m)*
  