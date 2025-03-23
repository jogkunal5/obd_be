import jwt from 'jsonwebtoken';

const payload = {
    user_id: 1,
    name: 'Nick Fury',
    role: 'Admin',
};

const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '7d' });
console.log('Generated Token:', token);
