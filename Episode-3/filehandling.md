# Episode 3: **File Handling in NodeJS**

The `fs` module in Node.js provides an API to interact with the file system in a manner closely modeled around standard POSIX functions. Here are some of the key methods provided by the `fs` module:

1. **fs.readFile(path, [options], callback)** : Asynchronously reads the entire contents of a file.

```jsx
const fs = require("fs");

fs.readFile("/path/to/file", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

1. **fs.writeFileSync(file, data, [options])** : Synchronously writes data to a file, replacing the file if it already exists.

```jsx
const fs = require("fs");

fs.writeFileSync("/path/to/file", "Hello World!", "utf8");
console.log("File has been written");
```

1. **fs.appendFile(path, data, [options], callback)** : Asynchronously append data to a file, creating the file if it does not yet exist.

```jsx
const fs = require("fs");

fs.appendFile("/path/to/file", "Hello Node.js", "utf8", (err) => {
  if (err) throw err;
  console.log('The "Hello Node.js" was appended to file!');
});
```

1. **fs.unlink(path, callback)** : Asynchronously removes a file or symbolic link.

```jsx
const fs = require("fs");

fs.unlink("/path/to/file", (err) => {
  if (err) throw err;
  console.log("File was deleted");
});
```

1. **fs.readdir(path, [options], callback)** : Asynchronously reads the contents of a directory.

```jsx
const fs = require("fs");

fs.readdir("/path/to/directory", (err, files) => {
  if (err) throw err;
  for (let file of files) {
    console.log(file);
  }
});
```

Remember, these are just a few of the methods provided by the `fs` module. There are many more methods for more advanced use cases. Also, most of these methods have synchronous versions that block the Node.js event loop while they complete. These synchronous versions are typically suffixed with 'Sync' (e.g., `fs.readFileSync`, `fs.writeFileSync`).

Certainly! In Node.js, a file system module called "fs" is provided as a part of the standard library. This module allows you to interact with the file system on your computer, enabling you to read from and write to files, create directories, and perform various file-related operations. Here's a basic explanation of key file system operations in Node.js for beginners:

1. **Require the 'fs' module:**
   To use the file system module, you first need to import it into your Node.js script using the `require` statement:

   ```jsx
   const fs = require("fs");
   ```

2. **Reading a File:**
   You can read the contents of a file using the `fs.readFile` method. It takes the file path and a callback function as parameters. The callback function is executed once the file is read, and it receives two parameters: an error (if any) and the file content.

   ```jsx
   fs.readFile("example.txt", "utf8", (err, data) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log(data);
   });
   ```

3. **Writing to a File:**
   To write data to a file, you can use the `fs.writeFile` method. It takes the file path, data to be written, and a callback function. If the file doesn't exist, it will be created. If it already exists, the content will be overwritten.

   ```jsx
   fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log("File written successfully!");
   });
   ```

4. **Creating a Directory:**
   You can create a new directory using the `fs.mkdir` method. It takes the directory path and a callback function. Ensure that the parent directories exist before creating a new one.

   ```jsx
   fs.mkdir("new_directory", (err) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log("Directory created successfully!");
   });
   ```

5. **Checking if a File or Directory Exists:**
   The `fs.existsSync` method allows you to check if a file or directory exists at a given path. It returns a boolean indicating whether the path exists.

   ```jsx
   const path = "example.txt";
   if (fs.existsSync(path)) {
     console.log(`${path} exists!`);
   } else {
     console.log(`${path} does not exist.`);
   }
   ```

6. **Deleting a File or Directory:**
   To delete a file or an empty directory, you can use the `fs.unlink` or `fs.rmdir` method, respectively. Make sure the file or directory is not in use, and permissions allow deletion.

   ```jsx
   fs.unlink("example.txt", (err) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log("File deleted successfully!");
   });
   ```

   ```jsx
   fs.rmdir("new_directory", (err) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log("Directory deleted successfully!");
   });
   ```

These are some of the basic file system operations you can perform using the 'fs' module in Node.js. Remember to handle errors appropriately and consider asynchronous operations when dealing with file I/O to ensure non-blocking code execution.

Async vs sync:

The main difference between the synchronous and asynchronous versions of `readFile` and `writeFile` in Node.js's `fs` module is how they handle I/O operations.

1. **Asynchronous (fs.readFile and fs.writeFile)** : These methods are non-blocking. They initiate the file operation and then immediately return, allowing other code to execute while the file operation completes in the background. When the operation is complete, a callback function is invoked with the result.

```jsx
const fs = require("fs");

fs.readFile("/path/to/file", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Reading file...");
```

In this example, 'Reading file...' will be logged to the console before the contents of the file, because the file reading operation is performed in the background.

1. **Synchronous (fs.readFileSync and fs.writeFileSync)** : These methods are blocking. They do not return until the file operation is complete, and no other code can execute during that time.

```jsx
const fs = require("fs");

let data = fs.readFileSync("/path/to/file", "utf8");
console.log(data);

console.log("File has been read");
```

In this example, the contents of the file will be logged to the console before 'File has been read', because the file reading operation blocks other code from executing until it's complete.

In general, you should prefer the asynchronous methods when working with Node.js, because they allow Node.js to execute other code while waiting for I/O operations to complete, which is more efficient. However, the synchronous methods can be simpler to use in some cases, especially for one-off operations or during initialization.

Sure, let's break it down with a real-world analogy.

Imagine you're at a fast-food restaurant. You place your order at the counter, and then you have two options:

1. **Asynchronous (Non-blocking)** : You're given a buzzer that will ring when your order is ready. You can go find a table, chat with friends, or do anything else while waiting for your order. When the buzzer rings, you go to the counter, pick up your order, and continue with your meal. This is like the asynchronous methods in Node.js. Your program can continue doing other things (like handling other users' requests) while it waits for the file operation to complete.
2. **Synchronous (Blocking)** : You stand at the counter and wait until your order is ready. You can't do anything else during this time. Once your order is ready, you take it and go find a table. This is like the synchronous methods in Node.js. Your program can't do anything else until the file operation is complete.

In a fast-food restaurant, the asynchronous method is usually better because it allows you to do other things while waiting for your order. Similarly, in Node.js, the asynchronous methods are usually better because they allow your program to do other things while waiting for file operations to complete. This is especially important in a server environment where you might be handling many requests at the same time.

However, sometimes the synchronous method can be simpler and easier to manage, especially if you're just learning or if you're doing a one-off operation where you don't care about blocking. It's like if you're the only customer in the restaurant and you don't mind waiting at the counter for your order.
