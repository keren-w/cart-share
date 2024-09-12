import React, { createContext, useReducer } from 'react';
import {IUser} from "../types/users.types";

const initialUserData: IUser = {
    id: '',
    name: {
        firstName: '',
        lastName: '',
    },
    email: '',
    username: '',
    location: {
        city: '',
        country: '',
    },
};

interface IUserContext {
    userData: IUser;
    setUserData: (userData: IUser) => void;
    updateUserData: (userData: Partial<IUser>) => void;
};

export const UserContext = createContext<IUserContext>({
    userData: initialUserData,
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

    const [userData, dispatch] = useReducer(reducer, initialUserData);
    const setUserData = (userData: IUser) => dispatch({ type: USER_ACTIONS.SET_USER_DATA, payload: userData });
    const updateUserData = (userData: Partial<IUser>) => dispatch({ type: USER_ACTIONS.UPDATE_USER_DATA, payload: userData });
    
    return (
        <UserContext.Provider value={{ userData, setUserData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
}