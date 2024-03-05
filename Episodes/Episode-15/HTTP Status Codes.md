# Episode 15: **HTTP Status Codes**

HTTP status codes are three-digit numbers that are returned by a server in response to a client's request made to the server. These codes provide information about the status of the request and the outcome of the server's attempt to process it. HTTP status codes are grouped into five classes, each representing a different type of response. The first digit of the status code indicates the class of response, while the last two digits do not have any categorization role.

Here are the five classes of HTTP status codes:

1. **1xx Informational:**
   - 100 Continue
   - 101 Switching Protocols
   - 102 Processing (WebDAV; RFC 2518)
2. **2xx Success:**
   - 200 OK
   - 201 Created
   - 202 Accepted
   - 203 Non-Authoritative Information
   - 204 No Content
   - 205 Reset Content
   - 206 Partial Content
   - 207 Multi-Status (WebDAV; RFC 4918)
   - 208 Already Reported (WebDAV; RFC 5842)
   - 226 IM Used (RFC 3229)
3. **3xx Redirection:**
   - 300 Multiple Choices
   - 301 Moved Permanently
   - 302 Found
   - 303 See Other
   - 304 Not Modified
   - 305 Use Proxy
   - 307 Temporary Redirect
   - 308 Permanent Redirect (RFC 7538)
4. **4xx Client Error:**
   - 400 Bad Request
   - 401 Unauthorized
   - 402 Payment Required
   - 403 Forbidden
   - 404 Not Found
   - 405 Method Not Allowed
   - 406 Not Acceptable
   - 407 Proxy Authentication Required
   - 408 Request Timeout
   - 409 Conflict
   - 410 Gone
   - 411 Length Required
   - 412 Precondition Failed
   - 413 Payload Too Large
   - 414 URI Too Long
   - 415 Unsupported Media Type
   - 416 Range Not Satisfiable
   - 417 Expectation Failed
   - 418 I'm a teapot (RFC 2324)
   - 421 Misdirected Request
   - 422 Unprocessable Entity (WebDAV; RFC 4918)
   - 423 Locked (WebDAV; RFC 4918)
   - 424 Failed Dependency (WebDAV; RFC 4918)
   - 425 Too Early (RFC 8470)
   - 426 Upgrade Required
   - 428 Precondition Required
   - 429 Too Many Requests
   - 431 Request Header Fields Too Large
   - 451 Unavailable For Legal Reasons
5. **5xx Server Error:**
   - 500 Internal Server Error
   - 501 Not Implemented
   - 502 Bad Gateway
   - 503 Service Unavailable
   - 504 Gateway Timeout
   - 505 HTTP Version Not Supported
   - 506 Variant Also Negotiates
   - 507 Insufficient Storage (WebDAV; RFC 4918)
   - 508 Loop Detected (WebDAV; RFC 5842)
   - 510 Not Extended
   - 511 Network Authentication Required

**Responsibilities of Each Class:**

- **1xx Informational:** These codes indicate that the request was received, continuing process.
- **2xx Success:** This class of status codes indicates the action requested by the client was received, understood, accepted, and processed successfully.
- **3xx Redirection:** This class of status code indicates that the client must take additional action to complete the request. Often used for redirection.
- **4xx Client Error:** The client seems to have made an error. These are cases where the client seems to have made an error, and further action might be needed by the client to successfully complete the request.
- **5xx Server Error:** The server failed to fulfill a valid request. These are cases where the server is aware that it has encountered an error or is otherwise incapable of performing the request.

**Possible Interview Questions:**

1. **Explain the purpose of HTTP status codes.**
2. **Can you give examples of 2xx, 3xx, 4xx, and 5xx status codes and their meanings?**
3. **When might a server return a 404 status code?**
4. **What is the difference between a 301 and a 302 status code?**
5. **Why do we have different classes of HTTP status codes?**
6. **How can a client distinguish between a temporary and permanent redirect?**
7. **What does a 503 status code indicate, and how should a client handle it?**
8. **Explain the significance of the 418 I'm a teapot status code.**
9. **In what situations might a server return a 429 status code?**
10. **Describe a scenario where a 500 status code would be appropriate.**

These questions can help assess a candidate's understanding of HTTP status codes and their ability to apply this knowledge in practical scenarios.
