# Episode 10: **What is REST API?**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/2d4af16d-5c1f-45db-91cd-e4d548464820/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/31d952d3-54e6-49d2-8434-0e5c400234c8/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/8fa05018-2fdd-47e7-b35c-c0431fb02810/Untitled.png)

Imagine a REST API as a librarian. The library is full of books (data), and the librarian (API) is the one who knows how to find, organize, and manage those books.

1. **GET** : This is like asking the librarian to show you a specific book or a list of books. You're not changing anything, just retrieving information. In a REST API, a GET request fetches data from the server.
2. **POST** : This is like giving the librarian a new book to add to the library. You're creating new data on the server. In a REST API, a POST request sends data to the server to create a new resource.
3. **PUT** : This is like giving the librarian a revised edition of a book to replace the old one. You're updating an existing resource in its entirety. In a REST API, a PUT request updates an existing resource with new data.
4. **PATCH** : This is like giving the librarian a page to replace a torn page in a book. You're making a partial update to an existing resource. In a REST API, a PATCH request partially updates an existing resource.
5. **DELETE** : This is like asking the librarian to remove a book from the library. You're deleting an existing resource. In a REST API, a DELETE request removes an existing resource.

Just like how a librarian helps you interact with a library, a REST API helps clients interact with a server. It provides a set of rules (HTTP methods) that clients can use to view, create, update, and delete data.

An API (Application Programming Interface) is like a menu in a restaurant. It's a list of operations that a program (the restaurant) can perform for its users (the customers). Just like how a menu tells you what dishes you can order, an API tells other programs what operations they can perform.

A REST API is like a specific type of menu in a restaurant that follows certain rules. For example, it might be a menu that categorizes dishes into starters, main courses, and desserts, and provides a description for each dish. Similarly, a REST (Representational State Transfer) API is a type of API that follows certain rules:

1. It uses HTTP methods (GET, POST, PUT, PATCH, DELETE) to perform operations.
2. It is stateless, meaning each request from a client to server must contain all the information needed to understand and process the request.
3. It organizes resources with URLs (like how the menu organizes dishes into categories).

So, all REST APIs are APIs, but not all APIs are REST APIs. There are other types of APIs that follow different rules, like GraphQL APIs, SOAP APIs, etc.

CRUD and REST are two concepts often used in the context of web development and APIs, but they represent different ideas.

**CRUD** stands for Create, Read, Update, Delete. These are the four basic operations you can perform on data in a database. It's like the basic actions you can do with a physical file: create a new file, read the content of a file, update the content of a file, or delete the file.

**REST** (Representational State Transfer) is an architectural style for designing networked applications. A REST API uses HTTP requests to perform actions on data, and it often maps these actions to the CRUD operations:

- Create -> POST
- Read -> GET
- Update -> PUT or PATCH
- Delete -> DELETE

So, CRUD is a set of operations you can perform on data, and REST is a way of designing an API that can perform these operations over a network. In a RESTful API, the CRUD operations are typically implemented using the HTTP methods POST, GET, PUT/PATCH, and DELETE.
