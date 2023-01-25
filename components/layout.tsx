// https://hits.ai/     
import { ChildrenProps } from '../utils/types/common/interface';
import Header from './header';
import React from 'react';

export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}