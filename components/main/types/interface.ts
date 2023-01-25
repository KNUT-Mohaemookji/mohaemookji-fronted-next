import React, {ReactNode} from 'react';

// main
export interface IMainTextProps{
    item: string,
    children: ReactNode,
    bracketStart: string,
    bracketEnd: string,
    li_text: string[]
}