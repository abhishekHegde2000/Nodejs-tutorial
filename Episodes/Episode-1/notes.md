# Episode 1: Hello World

In Node.js, the `window` object is not available because it's a part of the Browser JavaScript API, not the Node.js runtime. Node.js is a server-side platform and doesn't have a window object because it doesn't have a graphical user interface.

```
console.log("hello");

console.log(window);

```

npm -v to check the version

npm init → to start any new project

We can assign names to certain commands in a script, and then execute them using their respective names.

To do this, use the following format:

`npm run "script name"`
