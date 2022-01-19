import React from 'react'
import './Login.css'
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })

            console.log(result.user);
        }).catch(error=>console.log(error))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="fb logo" />

                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />
                </div>

            <button type='submit' onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
