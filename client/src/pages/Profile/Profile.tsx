import {useContext, useEffect} from 'react';
import { UserContext } from '../../context/user.context';
import { getUserCarts} from '../../api';

const Profile = () => {
    const { userData, updateUserData } = useContext(UserContext);
    useEffect(() => {
        (async () => {
            if (!userData.carts) {
                const userCarts = await getUserCarts(userData?.id);
                updateUserData(userCarts);
        }
})();
}, []);
    const {carts} = userData;
    console.log(userData);
    return (
        <div>
           Owned Carts: {carts?.owned?.length}<br/>
           Following Carts: {carts?.following?.length}
        </div>
    );
}

export default Profile;