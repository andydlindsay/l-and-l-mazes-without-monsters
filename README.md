# Lunch && Learn: Mazes Without Monsters 

### To Do
- [x] Implement a maze generating algorithm

### Algorithm

- Series of steps to accomplish some task

### Stack-based Algorithm

- Stacks are LIFO Last in First out
- Queues are FIFO First in First out

### Recursive Backtracking

1. Choose a starting node
2. Push the starting node onto the stack

If there are nodes in the stack (stack.length > 0)

3. Retrieve the top node from the stack (peek)
4. Find the neighbours of that node
5. Filter out nodes that have already been visited

If there are neighbours that haven't been visited

6. Make a random choice between remaining neighbours
7. Push the new node onto the stack
8. Create a link between next node and current node

If there are no neighbours to visit

9. Pop the node off the stack

### Classes

- [x] Stack 
- [x] Node
- [x] Maze

### Further Reading

* [Algorithms](https://en.wikipedia.org/wiki/Algorithm)
* [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
