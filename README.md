# JSBinaryTree

## Usage:
    /**
    * Details: This is a Javascript implementation of a binary tree.
    *
    * This libary implements:
    *   - jsBinaryTree.get(value, filter)  
    *         Indempotent function call that retrieves based on the filter string of:
    *           a) (value, null)    -> Returns boolean.
    *           b) (value, 'prior') -> Node value immediately less than value.
    *           c) (value, 'next')  -> Node value immediately more than value.      *           d) (null, 'min')    -> Returns min value in the tree, or null.
    *           e) (null, 'max')    -> Returns max value in the tree, or null.
    *           f) (null, null)     -> Returns array of the full ordered tree.
    *   - jsBinaryTree.post(value)
    *         Inserts a new node into the tree.
    *         Return codes: 201 (successful insert), 409 (duplicate).
    *   - jsBinaryTree.delete(value)
    *         Deletes the node of the param value.
    *         Return codes: 200 (success), 409 (failure/not found).

## Installation:
    * Run "git clone <url>" to install this library.
    * Run "Npm install" to load devDependencies.
    * Run "npm test" to run test scripts.

## Pull Requests
    * Please branch and submit pull requests to Github.
    * Open Dev Needs include:
    *    1) delete Function for 2 children
    *    2) get(max) function
    *    3) get(prior) Function
    *    4) get(next) Function
    *    5) Karma unit tests.  Lib/config installed but needs babel for ES6.
