# JSBinaryTree

## Usage:
    /**
    * Details: This is a Javascript implementation of a binary tree.
    *
    * This libary implements:
    *   - jsBinaryTree.get(value, filter)  
    *         Indempotent function call that retrieves based on the filter string of:
    *           a) (value, null)    -> Returns boolean.
    *           b) (value, 'prior') -> Node value immediately less than param.
    *           c) (value, 'next')  -> Node value immediately less than param.                *           d) (null, 'min')    -> Returns min value in the tree.
    *           e) (null, 'max')    -> Returns max value in the tree.
    *           f) (null, null)     -> Returns the full order tree as an array.
    *   - jsBinaryTree.post(value)
    *         Inserts a new node into the tree.
    *         Return codes: 201 for successful insert, 409 for duplicate.
    *   - jsBinaryTree.delete(value)
    *         Deletes the node of the param value.

## Installation:
    * Run "git clone <url>" to install this library.
    * Run "Npm install" to load devDependencies.
    * Run "npm test" to run test scripts.

## Pull Requests
    * Please branch and submit pull requests to Github.
    * Open Dev Needs include:
    *    1) delete Function
    *    2) get(min) Function
    *    3) get(max) function
    *    4) get(value) Function
    *    5) get(prior) Function
    *    6) get(next) Function
    *    7) Karma unit tests.  Lib/config installed but needs babel for ES6.
