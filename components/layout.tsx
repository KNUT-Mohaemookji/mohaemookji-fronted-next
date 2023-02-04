// https://hits.ai/     
import { ChildrenProps } from '../utils/types/common/interface';
import Header from './common/header';
import React from 'react';
import Progress from './common/progress';
import useProgressState from './common/hooks/useProgressState';
import Loading from './common/loading';

export default function Layout({ children }: ChildrenProps) {
    const progressState = useProgressState();
    return (
        <>
            { progressState && <Loading />} 
            <Header />
            {children}
        </>
    )
}