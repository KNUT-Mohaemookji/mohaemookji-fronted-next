import React from 'react';
import * as S from './style/urlChangeButton';
import Link from 'next/link';
import { IUrlChangeButtomProps } from './type/interface';

const UrlChangeButton = ({text, url}: IUrlChangeButtomProps) => {
    return (
        <>
            <S.MainButtonContain>
                <Link href={url}>
                    <S.Button className="watch_button">{text}</S.Button>
                </Link>
            </S.MainButtonContain>
        </>
    );
};

export default UrlChangeButton;