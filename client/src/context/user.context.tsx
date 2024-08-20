import React, { createContext, useState } from 'react';

interface IUser {
    id: string;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    phone?: string;
    username: string;
    password: string;
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
    activeCarts: Array<{ id: string; isOwner: boolean }>;
}

const initialUserData: IUser = {
    id: '',
    name: {
        firstName: '',
        lastName: '',
    },
    email: '',
    username: '',
    password: '',
    location: {
        city: '',
        country: '',
    },
    activeCarts: [{ id: '', isOwner: false }]
};

interface IUserContext {
    userData: IUser;
    setUserData: (userData: IUser) => void;
};

export const UserContext = createContext<IUserContext>({
    userData: initialUserData,
    setUserData: () => {},
});

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<IUser>(initialUserData);
    
    return (
       <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}