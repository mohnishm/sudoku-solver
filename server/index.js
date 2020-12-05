const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
const router = require('./routes/routes');
app.use('/sudoku/api/', router);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port: ${port}`));

