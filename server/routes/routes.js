const express = require('express');
const board = require('../helperFunctions/sudokuBoard.js');
const sudokuSolver = require('../helperFunctions/sudokuSolver.js');
const router = express.Router();

router.get('/board', (req, res) => {
    res.send(board);
});

router.post('/solve', (req,res) => {
    try{
        if (req.body && req.body.sudoku) {
            sudokuSolver(req.body.sudoku).then(result => {
                let message = result[0].includes(0) ? "Sudoku not solved" : "Sudoku solved successfully";
                res.status(200);
                res.send({ message: message, result: result });
            }).catch(error => {
                res.status(400).json('Error: ' + error);
                res.send("Sudoku solve failed.");
            });
        } else {
            res.status(400);
            res.send("Bad Request");
        }
    } catch (error){
        res.status(500).json('Error: ' + error);
        res.send("Internal Server Error");
    }
});

module.exports = router;