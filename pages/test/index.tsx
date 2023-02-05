import React from 'react';
import { GetServerSideProps, NextPage } from 'next/types';

const Test: NextPage = ( {id}: {id: string} ) => {
    return (
        <>
            <p>아이디는 {id} 입니다.</p>
        </>
    )
}

export default Test;


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {params, req, res} = context;
    console.log('params' + params);
    console.log('req' + req);
    console.log('res' + res);
    const testId = req
    return {
        props: {
            id: 'userID -> ' + testId
        }
    }
}