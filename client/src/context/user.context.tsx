import React, { createContext, useReducer } from 'react';

interface IUserBase {
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

interface INewUser extends IUserBase {}

interface IExistingUser extends IUserBase {
    id: string;
}

type IUser = INewUser | IExistingUser;

// function isExistingUser(user: IUser): user is IExistingUser {
//     return 'id' in user;
// }

const initialNewUserData: INewUser = {
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
    activeCarts: []
};

// const initialExistingUserData: IExistingUser = {
//     id: '',
//     ...initialNewUserData
// };

interface IUserContext {
    userData: IUser;
    setUserData: (userData: IUser) => void;
    updateUserData: (userData: Partial<IUser>) => void;
};

export const UserContext = createContext<IUserContext>({
    userData: initialNewUserData,
    setUserData: () => {},
    updateUserData: () => {}
});


const USER_ACTIONS = {
    SET_USER_DATA: 'SET_USER_DATA',
    UPDATE_USER_DATA: 'UPDATE_USER_DATA',
} as const;

const reducer = (state: IUser, action: { type: keyof typeof USER_ACTIONS; payload: Partial<IUser> }) => {
    switch (action.type) {
        case USER_ACTIONS.SET_USER_DATA:
            return {...state, ...action.payload};
        case USER_ACTIONS.UPDATE_USER_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [userData, dispatch] = React.useReducer(reducer, initialNewUserData);
    const setUserData = (userData: IUser) => dispatch({ type: USER_ACTIONS.SET_USER_DATA, payload: userData });
    const updateUserData = (userData: Partial<IUser>) => dispatch({ type: USER_ACTIONS.UPDATE_USER_DATA, payload: userData });
    
    return (
       <UserContext.Provider value={{ userData, setUserData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
}