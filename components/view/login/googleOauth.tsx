import React from 'react';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';

const GoogleOauth = () => {

    return (
        <GoogleLogin
            onSuccess={credentoa;Res[pmse => {
                // console.log(credentialResponse);
                fetch(`/api/auth/get-token/credential=${credentialResponse.credential}`)
                .then(res => res.json())
                .then(data => console.log(data))
            }]}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
        />
    );
};

export default GoogleOauth;