// import React, { useEffect, useState, useRef } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import MainTextView from '../../../view/main/section1/mainTextView';

const MainText = () => {
    // const [li_text, setLi_text] = useState(['간식', '운동식', '건강식', '일반식']);
    // const item = useRef<HTMLUListElement | null>(null);
    // const router = useRouter();
    // const { pathname } = router;

    // let [loop, setLoop] = useState<number>(0);
    // let Y = 0;
    // let [bracketStart, bracketEnd] = ['[', ']'];

    // useEffect(() => {
    //     console.log(pathname);
    //     const loopSetInterval = setInterval(() => {
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //         setLoop(loop+=1);
    //         console.log(loop);
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //         item.current!.style.transform = `translateY(${Y -= 49}px)`
    //         item.current!.style.transition = '1s';
    //         if (loop === 3) {
    //             loop = 0;
    //             Y = 0;
    //         }
    //     }, 3000);
    //     console.log('pathname은?', pathname);
    //     // unmounted되면 setInterval 제거시켜주기.
    //     return () => {
    //         clearInterval(loopSetInterval);
    //     }
    // }, []);
    // const props = {
    //     item,
    //     bracketStart,
    //     bracketEnd,
    //     li_text
    // }
    return (
        <>
             {/* eslint-disable-next-line react/no-children-prop */}
            {/* <MainTextView children={undefined} {...props} /> */}
        </>
    );
};

export default MainText;