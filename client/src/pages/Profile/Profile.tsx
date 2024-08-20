import {useContext} from 'react';
import { UserContext } from '../../context/user.context';

const Profile = () => {
    const { userData } = useContext(UserContext);
    console.log(userData);
    return (
        <div>
            {userData?.name?.firstName}'s Profile
        </div>
    );
}

export default Profile;