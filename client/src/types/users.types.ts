export interface IUser {
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    phone?: string;
    username: string;
    age?: number;
    gender?: string;
    location: {
        city: string;
        state?: string;
        country: string;
    };
    profession?: {
        jobTitle?: string;
        company?: string;
    };
    socialMedia?: {
        facebook?: string;
    };
    avatarUrl?: string;
    carts?: {
        owned: Array<{ id: string; }>;
        following: Array<{ id: string; }>;
    }
    id: string;
}