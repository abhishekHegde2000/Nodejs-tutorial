# Episode 4: **How NodeJS Works?**

## Understanding Node.js: Real-World Analogies

Node.js is a powerful tool for building web applications

**1. How Node.js Works:**

Imagine a **busy restaurant** with a single, highly skilled **chef** (Node.js) and several **waiters** (event loop). Customers (requests) arrive constantly, placing orders (tasks). The chef can only cook one dish (task) at a time, but they're very efficient at switching between tasks quickly.

- **Customers arrive:** New requests come in from users.
- **Orders are taken:** The event loop receives and queues these requests.
- **Chef cooks:** The chef starts working on the first request in the queue.
- **Waiters assist:** If the chef needs ingredients (data from databases or APIs), they can "ask" waiters (asynchronous operations) to fetch them without stopping other tasks.
- **Orders are served:** Once the chef finishes a request, the response is sent back to the user.
- **Repeat:** The event loop continues processing the remaining requests in the queue.

**2. Event Loop in Node.js:**

Think of the **event loop** as the **restaurant's manager** . They constantly monitor the situation, ensuring things run smoothly:

- **Managing the queue:** The manager keeps track of incoming requests and prioritizes them in the queue.
- **Handling waiters:** The manager coordinates with waiters, assigning them tasks to fetch data and notifying the chef when it's ready.
- **Keeping the chef informed:** The manager informs the chef when new requests arrive or when data is available.

**3. Node.js Architecture:**

Imagine the **restaurant's kitchen** as the **Node.js architecture** :

- **Chef (Single-threaded):** Node.js itself is single-threaded, meaning it can only execute one task at a time, just like the chef.
- **Non-blocking I/O:** The waiters represent Node.js's non-blocking I/O (Input/Output) operations. They handle tasks like fetching data from external sources without blocking the chef (the main thread).
- **Event-driven:** Communication between the chef, waiters, and manager happens through events, similar to how the manager might call out orders and receive updates.

**4. Thread Pool in Node.js:**

While Node.js is single-threaded, it can utilize a **thread pool** (like **kitchen assistants** ) for specific tasks:

- **Heavy workloads:** Imagine complex calculations or image processing. These tasks can be delegated to the assistants (threads) in the pool, freeing up the chef (main thread) to handle other requests.
- **Limited use:** Thread pools are used sparingly in Node.js as they can introduce overhead and complexity.

**5. Event Queue in Node.js:**

The **event queue** is like a **waiting list** for requests:

- **FIFO (First-In-First-Out):** Requests are processed in the order they arrive, just like customers waiting in line.
- **Prioritization:** The event loop can prioritize certain requests based on their urgency or type.

By understanding these concepts with real-world analogies, you can gain a basic understanding of how Node.js works and efficiently manages multiple requests without getting overwhelmed. Remember, these are simplified representations, and Node.js has additional complexities, but these analogies should provide a good starting point for beginners.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/7e538a4f-912f-4fba-b8de-fdc53936d45f/Untitled.png)

Async - non blocking - direct responce

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/469c7993-d0b3-4b19-a002-c114dddd0b80/Untitled.png)

sync - Blocking - uses a thread

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/3fa6ae7f-3463-4aa7-a3ab-008ac8c28818/Untitled.png)

Example for this:

```
const fs = require("fs");

// synchronous file read

console.log("Before file read");
const data = fs.readFileSync("contact.txt", "utf-8");
console.log(data);
console.log("After file read");

```

Output:

PS C:\Code\js\Nodejs\Nodejs-tutorial> node working.js
Before file read
abhi - +91 91111111111111

hegde - +91 67896666666
After file read
PS C:\Code\js\Nodejs\Nodejs-tutorial>

```jsx
console.log("Before file read - async");
fs.readFile("contact.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("After file read - async");
```

Output:

PS C:\Code\js\Nodejs\Nodejs-tutorial> node working.js
Before file read - async
After file read - async
abhi - +91 91111111111111

hegde - +91 67896666666
PS C:\Code\js\Nodejs\Nodejs-tutorial>

Default thread pool size : 4

can we increase it? depends on the code.

8-core (octacore)

in node js we have a module called os.
