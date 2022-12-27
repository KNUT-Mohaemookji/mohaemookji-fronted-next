import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MainButtonView from '../view/main/mainButtonView';

const MainButton = () => {
    let [categoryState, setCategoryState] = useState(false);
    
    const props = {
        categoryState,
        setCategoryState, 
        categoryButton
    }

    const categoryHover = () => {

    }
    return (
        <>
            <MainButtonView {...props}/>
        </>
    );
};

export default MainButton;