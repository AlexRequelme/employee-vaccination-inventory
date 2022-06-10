export default interface User {
    email: string;
    id: number;
    cc: string;
    name: string;
    surname: string;
    isAdmin: boolean;
    birthDate?: string;
    address?: string;
    phone?: string;
    vaccinationState: string;
    vaccinationType?: string;
    vaccinationDate?: string;
    vaccinationNum?: string;
}
