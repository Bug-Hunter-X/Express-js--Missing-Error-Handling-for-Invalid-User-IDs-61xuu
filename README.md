# Express.js: Missing Error Handling for Invalid User IDs

This repository demonstrates a common error in Express.js applications: inadequate error handling when dealing with requests involving parameters like user IDs. The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Problem

The initial code lacks proper error handling for cases where a user ID is invalid or a user is not found. Instead of returning appropriate HTTP status codes (like 404 Not Found), it uses a generic 500 Internal Server Error, obscuring the actual cause of the error.

## Solution

The corrected code in `bugSolution.js` implements explicit checks for invalid user IDs and missing users.  It uses the appropriate HTTP status codes to respond to these scenarios, which improves the user experience and helps in debugging.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` (for the buggy version) or `node bugSolution.js` (for the corrected version).
4. Test with valid and invalid user IDs using tools such as curl or Postman.