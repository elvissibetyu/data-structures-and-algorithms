#### Hash Tables Source Code

* Uses a hash function to determine the index/address to put the element
* In case of collisions:
    - Seperate Chaining: Put the items in the same address
    - Linear probing: find the next available address
 
```java

public class HashTable {
  private int size = 7;
  private Node[] dataMap;

  public HashTable() {
    dataMap = new Node[size];
  }

  class Node {
    private String key;
    private int value;
    private Node next;
  }

  public Node(String key, int value) {
    this.key = key;
    this.value = value;
  }

  private int hash(String key) {
    int hash = 0;
    char[] keyChars = key.toCharArray();
    for (int i = 0; i < keyChars.length; i++) {
      int asciiValue = keyChars[i];
      hash = (hash + asciiValue * 23) % dataMap.length;
    }
    return hash;
  }
  

}

``` 
