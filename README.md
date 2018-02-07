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
    *           f) (null, null)     -> Returns the full order tree.
    *   - jsBinaryTree.post(value)
    *         Inserts a new node into the tree.
    *   - jsBinaryTree.delete(value)
    *         Deletes the node of the param value.

## Install:
    *Npm install
