
import { useContext } from 'react';
import { UserContext } from '../../user.context';
import styles from './TopBar.module.css';

const TopBar = () => {
    const { userData } = useContext(UserContext);
    const { name } = userData;
    return (
        <div className={styles.topBar}>
            {/* {picture && <img src={picture} alt="profile"/>} */}
            <h3>Cart_Share</h3>
            {name?.firstName && <h3>Hello {name.firstName}</h3>}
        </div>
    );
};

export default TopBar;