const express = require('express');
const router = express.Router();

//Login Page
router.get('/logIn', (req, res) => res.send('LogIn'));

//Register Page
router.get('/register', (req, res) => res.send('Register'));

// Register Handle
router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('hello');
});

module.exports = router;