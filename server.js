const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'your_secret_key_here';

// Temporary database (replace with real database in production)
let users = [];

// Registration endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        
        // Validation
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        
        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }
        
        // Check if user exists
        if (users.some(user => user.email === email)) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password: hashedPassword
        };
        
        users.push(newUser);
        
        // Generate JWT token
        const token = jwt.sign({ userId: newUser.id }, SECRET_KEY, { expiresIn: '1h' });
        
        res.status(201).json({ 
            message: 'Registration successful',
            token,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user
        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
        
        res.json({ 
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});