export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}