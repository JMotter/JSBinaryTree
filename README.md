# JSBinaryTree

## Usage:
    /**
    * Details: This is a Javascript implementation of a binary tree.
    *
    * This libary implements:
    *   - jsBinaryTree.get(filterString)  
    *         Indempotent function call that retrieves based on the filter string of:
                a) value={value} -> Returns boolean.
                b) min -> Returns min value in the tree.
                c) max -> Returns max value in the tree.
                d) null -> Returns the full order tree.
                e) <future> value={value}&min -> Node value immediately less than param.
                f) <future> value={value}&max -> Node value immediately less than param.
    *   - jsBinaryTree.post(value)
    *         Inserts a new node into the tree.
    *   - jsBinaryTree.delete(value)
    *         Deletes the node of the param value.

## Install:
    *Npm install
