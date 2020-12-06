const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
const router = require('./routes/sudokuRoutes');
app.use('/sudoku/api/', router);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port: ${port}`));

