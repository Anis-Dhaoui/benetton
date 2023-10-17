import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/store.state';
import { handleLogout } from '../../../state/actions-creators/login.actions-creators';
import './style.avatar.navbar.css';

function Avatar() {
    const [avatarDropdownMenu, setAvatarDropdownMenu] = useState(false)
    const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
    const dispatch = useAppDispatch();

    const handleBodyClick = (event: any) => {
        if (!event.target.closest('#avatar-image')) {
            setAvatarDropdownMenu(false)
        }
    };

    useEffect(() => {
        // Add the click event listener when the component mounts
        document.body.addEventListener('click', handleBodyClick);

        // Remove the click event listener when the component unmounts
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);


    return (
        <>
            <div className="avatar-dropdown-menu">
                <div id="avatar-image" className="avatar-image" onClick={() => setAvatarDropdownMenu(!avatarDropdownMenu)}>
                    <img src={require("../../../assets/images/avatar-images/user-1.png")} alt="avatar" />
                </div>
                <div className={avatarDropdownMenu ? "open avatar-dropdown-menu-items" : "avatar-dropdown-menu-items"}>
                    <ul>
                        <li>
                            <span>{user?.user.username}</span>
                        </li>
                        <li>
                            <span>{`${user?.user.firstName} ${user?.user.lastName}`}</span>
                        </li>
                        <li>
                            <span onClick={() => dispatch(handleLogout)}>Log out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Avatar