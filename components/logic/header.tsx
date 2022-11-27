// 보류

import HeaderView from '../headerView';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// children interface types
interface Props {
    headerMove: any,
    hamburger: any,
    headerList: string[],
    urlLink: string[],
    overlay: any,
    menuState: boolean
}
  
const Header = () => {
    const [headerList, setHeaderList] = useState(['Home', 'About', 'Video', 'Contact']);
    const [urlLink, setUrlLink] = useState(['/', '/about', '/video', '/contact']);
    const [menuState, setMenuState] = useState(false);
    const hamburger = useRef<HTMLDivElement | null>(null);
    const overlay = useRef<HTMLDivElement | null>(null);


    const router = useRouter();

    const headerMove = () => {
        setMenuState(!menuState);
        console.log(overlay.current);
        if (menuState === true) {
            overlay.current!.style.transform = 'translateY(100%)';
            document.getElementById('toggle')?.classList.remove('active');
        } else {
            overlay.current!.style.transform = 'translateY(0%)';
            document.getElementById('toggle')?.classList.add('active');
        }
    }

    useEffect(() => {
        overlay.current!.style.transform = 'translateY(100%)';
        document.getElementById('toggle')?.classList.remove('active');
    }, [router.pathname]);

    const props: Props = {
        headerMove,
        hamburger,
        headerList,
        urlLink,
        overlay,
        menuState,

    }

    return (
        <></>
    );
};

export default Header;