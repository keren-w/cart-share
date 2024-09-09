import {useContext} from 'react';
import { UserContext } from '../../context/user.context';

const Profile = () => {
    const { userData } = useContext(UserContext);
    console.log(userData);
    return (
        <div>
            Carts
        </div>
    );
}

export default Profile;