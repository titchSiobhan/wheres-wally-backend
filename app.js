const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin:[ "http://localhost:5173",
       'https://whimsical-capybara-115946.netlify.app'
    ]
}));

app.post('/check', (req, res) => {
    const {x, y} =req.body;
    console.log("Received:", x, y);


    const found =  x > 680 && x < 730  && y > 240 && y < 370;
    res.json({found})
    
})

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Hello! We're on port ${PORT}`)
})