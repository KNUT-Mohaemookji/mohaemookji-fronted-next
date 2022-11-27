// https://hits.ai/     
import { ChildrenProps } from '../types/interface';
import Header from './headerView';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}