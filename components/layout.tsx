// https://hits.ai/     
import { ChildrenProps } from '../utils/types/common/interface';
import Header from './common/header';
import React from 'react';
import Progress from './common/progress';
import useProgressState from './common/hooks/useProgressState';

export default function Layout({ children }: ChildrenProps) {
    const progressState = useProgressState();
    return (
        <>
            { progressState && <Progress />} 
            <Header />
            {children}
        </>
    )
}