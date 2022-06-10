import { getConnection } from '../database.js';

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const db = getConnection();
        const userFound = db.data.users.find(
            (user) => user.password === password && user.username === username
        );
        if (!userFound) throw new Error('Incorrect Credentials');

        res.json(userFound);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
