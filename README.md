# Data Structures and Algorithms

## What is a data structure?

> A data structure is a way of organising data so that it can be used effectively.

### Why data structures?

- They are essential ingredients in creating fast and powerful algorithms
- They help to manage and organise data.
- They make code cleaner and easier to understand.

### Abstract data types vs data strucures

#### What is an abstract data type?

> ADT is an abstraction of a data structure which provides only the interface to which a data structure must adhere to. The interface does not give any specific details about how something should be implemented or in what programming language. In short it defines how a data structue should behave and what methods it should have.

##### Examples of ADT vs DS Implementation

Abstraction | Implementation
------------|---------------
List        | Dynamic Array, LinkedList
Queue       | Linked List Based Queue, Array Based Queue, Stack Based Queue
Map         | Tree Map, Hash Map/Hash Table
Vehicle     | Golf Cart, Bicycle, Smart Car

### Computational Complexity Analysis

> How much i=time does an alogirith take to finish and how much space does an algorithm need for its computation.

#### Big-O Notation

> Gives an upper bound of the complexity in the WORST case, helping to quantify perfomance as the input size becomes TOO LARGE.

- Constant Time: O(1)
- Logarithmic Time: O(log(n))
- Linear Time: O(n)
- Linearithmic Time: O(nlog(n))
- Quadratic time: O(n^2)
**n is the size of the input**

##### Somd Big-O Examples

- Finding all subsets of a set: O(2^n)
- Finding all permutations of a string: O(n!)
- Sorting using mergesort - O(nlog(n))
- Iterating over all the cells in a matrix of size n by m \: O(nm)

### Static and Dynamic Arrays (Part 1/2)

#### What is a static array?

> A static array is a fixed length container containing n elements INDEXABLE from the range [0, n - 1].

##### Complexity: Static Array vs Dynamic Array

Operation | Static Array | Dynamic Array
----------|--------------|--------------
Access    |     O(1)     |      O(1)
Search    |     O(n)     |      O(n)
Insertion |     N/A      |      O(n)
Appending |     N/A      |      O(1)
Deletion  |     N/A      |      O(n)

#### Dynamic Arrays

> Dynamic arrays can grow and shrink in size

### Dynamic Array Source Code

```java
    public class Array<T> implements Iterablle<T>

    private T [] arr;
    private int len = 0;
    private int capacity = 0;

    public Array() { this(16);}

    public Array(int capacity) {
        if (capacity < 0) throw new IllegalArgumentException("Illegal Capacity: " + capacity);
        this.capacity = capacity;
        arr = (T[]) new Object[capacity]
    }

    public int size() { return len; }
    public boolean isEmpty() { return size() == 0;}

    public T get(int index) {return arr[index];}
    public void set(int index, T elem) { arr[index] = elem;}

    public void clear() {
        for (int i = 0; i < capacity; i++) {
            arr[i] = null;
        }
        len = 0;
    }
```
