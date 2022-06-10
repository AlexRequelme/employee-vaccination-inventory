import { v4 } from 'uuid';
import { getConnection } from '../database.js';

export const getAllUsers = async (_req, res) => {
    try {
        const db = getConnection();
        res.json(db.data.users);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export const getUserById = (req, res) => {
    try {
        const { id } = req.params;
        const db = getConnection();
        const userFound = db.data.users.find((user) => user.id === id);
        if (!userFound) throw new Error('Not Found');

        res.json(userFound);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export const addUser = async (req, res) => {
    const payload = req.body;
    const newUser = {
        id: v4(),
        ...payload,
        isAdmin: false,
        birthDate: '',
        address: '',
        phone: '',
        isVaccination: '',
        vaccinationType: '',
        vaccinationDate: '',
        vaccinationNum: '',
    };

    try {
        const db = getConnection();
        checkCredentials(db.data.users, req.body.username);
        db.data.users.push(newUser);

        await db.write();

        res.json(newUser);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export const updateUserById = async (req, res) => {
    try {
        const db = getConnection();
        const userFound = db.data.users.find(
            (user) => user.id === req.params.id
        );
        if (!userFound) throw new Error('Not Found');

        checkCredentials(db.data.users, req.body.username);

        const userUpdated = { ...userFound, ...req.body };

        db.data.users = db.data.users.map((user) =>
            user.id === req.params.id ? userUpdated : user
        );
        await db.write();

        res.json(userUpdated);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const db = getConnection();
        const userFound = db.data.users.find((user) => user.id === id);
        if (!userFound) throw new Error('Not Found');

        const newUsers = db.data.users.filter((user) => user.id !== id);
        db.data.users = newUsers;

        await db.write();

        res.json(userFound);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const checkCredentials = (users, username) => {
    const checkUsername = users.filter(
        (user) => user.username === username
    ).length;

    if (checkUsername > 0) throw new Error('El username ya existe');
};
