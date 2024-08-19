import React, { createContext, useState } from 'react';

export interface IUser {
        id: string;
        username: string;
        name: {
            firstName: string;
            lastName: string;
        };
        activeCarts: { id: string, isOwner: boolean }[];

};

interface IUserContext {
    userData: IUser;
    setUserData: (userData: IUser) => void;
};

const initialUserData: IUser = {
    id: '',
    username: '',
    name: {
        firstName: '',
        lastName: '',
    },
    activeCarts: [{ id: '', isOwner: false }]
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