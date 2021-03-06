import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SuperviseUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStateValue } from './StateProvider'

function Header() {

    const [{ user },dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="fb logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook'/>
                </div>
            </div>            
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SuperviseUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
