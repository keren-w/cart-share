import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { useNavigate} from 'react-router-dom';
import {login, getUserData} from "../../api";

const Login = () => {
    const {setUserData, updateUserData} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };

    const handleSubmit = async () => {
        const response = await login(username);
        setUserData(response);
        const userData = await getUserData(response.id);
        updateUserData(userData);
        navigate('/profile');
      };
      
    return (
        <div className="login">
           username:
            <input type="text" value={username} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Login;