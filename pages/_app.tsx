import React from 'react';
import '../styles/globals.scss'
import Layout from '../components/layout';
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { CLIENT_ID } from '../constants/googleAuth';
import { ErrorBoundary } from 'react-error-boundary';

const store = configureStore();

const _App = ({Component, pageProps}: AppProps) => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </GoogleOAuthProvider>
  )
}

_App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return {...appProps}
} 

export default _App;