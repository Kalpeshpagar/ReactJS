const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Welcome to Auth")
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})