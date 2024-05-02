
// userController.test.js
const { createUser, getUserById } = require('../controllers/userController');
const { mockRequest, mockResponse } = require('jest-express');

describe('UserController', () => {
    test('should create a new user', async () => {
        const req = mockRequest({ body: { username: 'testuser', email: 'test@example.com' } });
        const res = mockResponse();

        await createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'User created successfully' });
    });

    test('should get user by id', async () => {
        const req = mockRequest({ params: { id: '123' } });
        const res = mockResponse();

        await getUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ id: '123', username: 'testuser', email: 'test@example.com' });
    });
});
