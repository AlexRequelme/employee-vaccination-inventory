import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 } from 'uuid';

let db;

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnection() {
    const file = join(__dirname, 'db.json');
    const adapter = new JSONFile(file);
    db = new Low(adapter);

    await db.read();

    db.data ||= {
        users: [
            {
                id: v4(),
                cc: '1234567890',
                name: 'Kruger',
                surname: 'Corp',
                email: 'admin@mail.com',
                username: 'admin',
                password: 'admin',
                isAdmin: true,
                vaccinationState: '-',
                birthDate: '-',
                address: '-',
                phone: '-',
                isVaccination: '-',
                vaccinationType: '-',
                vaccinationDate: '-',
                vaccinationNum: '-',
            },
        ],
    };

    await db.write();
}

export const getConnection = () => db;
