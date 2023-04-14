import React from 'react';
import {GoogleLogin} from '@react-oauth/google';

const Google = () => {
    return (
        <div className="google_login_contain" style={{display: 'flex'}}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    fetch(`/api/auth/get-token?credential=${credentialResponse.credential}`)
                    .then(res => res.json())
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    );
};

export default Google;