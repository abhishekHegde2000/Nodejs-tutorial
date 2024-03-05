MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability. It works on the concept of collections and documents, using a flexible, JSON-like document model that allows for varied data structures.

**How it works:**
MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time. The document model maps to the objects in your application code, making data easy to work with.

**Why it's best suited for Node.js:**
MongoDB and Node.js are a powerful combination for JavaScript development because of their shared use of JavaScript and JSON. This means you can use the same language for your frontend, backend, and database, which can make development more efficient and streamlined.

**Common MongoDB terminal commands:**

1. `mongo`: This command is used to connect to a MongoDB server.
2. `show dbs`: This command is used to display all databases.
3. `use <database>`: This command is used to switch to a specific database.
4. `show collections`: This command is used to display all collections in the current database.
5. `db.<collection>.find()`: This command is used to display all documents in a specific collection.
6. `db.<collection>.insert(<document>)`: This command is used to insert a new document into a collection.
7. `db.<collection>.update(<query>, <update>)`: This command is used to update documents that match a query.
8. `db.<collection>.remove(<query>)`: This command is used to remove documents that match a query.

Remember to replace `<database>`, `<collection>`, `<document>`, `<query>`, and `<update>` with your actual database name, collection name, document, query, and update.
