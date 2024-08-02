const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

const app = express();
const port = 8080;

app.use(cors()); // Add this line
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const { data } = req.body;
    const user_id = "M.Vinay_29052003";
    const email = "vinay_m@srmap.edu.in";
    const roll_number = "AP21110011568";

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id,
            email,
            roll_number,
            message: 'Invalid input: Data should be an array'
        });
    }

    const numbers = data.filter(item => /^[0-9]+$/.test(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    let highest_alphabet = [];
    if (alphabets.length > 0) {
        highest_alphabet = [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)];
    }

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

app.get('/show', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
