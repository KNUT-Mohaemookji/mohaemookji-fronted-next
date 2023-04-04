// https://hits.ai/     
import { ChildrenProps } from '../utils/types/common/interface';
import Header from './common/header';
import React from 'react';
import useProgressState from './common/hooks/useProgressState';
import Loading from './common/loading';
import Footer from './main/lastSection/footer';

export default function Layout({ children }: ChildrenProps) {
    const progressState = useProgressState();
    return (
        <>
            { progressState && <Loading />} 
            <Header />
            {children}
            <Footer/>
        </>
    )
}