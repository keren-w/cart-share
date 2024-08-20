
import { useState, useContext } from 'react';
import { IUser, UserContext } from '../../context/user.context';
import styles from './TopBar.module.css';

const TopBar = () => {
    const { userData } = useContext(UserContext);
    return (
        <div className={styles.topBar}>
            <h3>Cart_Share</h3>
            <UserMenuIcon userData={userData} />
        </div>
    );
};

export default TopBar;

export const UserMenuIcon = ({ userData }: { userData: IUser | null }) => {
    const { name: { firstName } = { firstName: '' }, avatarUrl } = userData || {};
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    if (!firstName) {
        return null;
    }

    const displayImageElement = imageLoaded && !imageError;

    return (
        <div className={styles.userMenuIcon}>
            {avatarUrl && (
                <img
                    src={avatarUrl}
                    alt={firstName}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    style={{ display: displayImageElement ? 'block' : 'none' }}
                />
            )}
            {imageError && (
                <div className={styles.userIconPlaceholder}>
                    <span>{firstName}</span>
                </div>
            )}
        </div>
    );
};
