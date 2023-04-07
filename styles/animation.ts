import {keyframes} from 'styled-components';

export const LeftToRight = keyframes`
    from { 
        opacity: 0;
        transform: translateX(-30%);
    } to{
        opacity: 1;
        transform: translateX(0%);
    }
`

export const RightToLeft = keyframes`
    from { 
        opacity: 0;
        transform: translateX(30%);
    } to{
        opacity: 1;
        transform: translateX(0%);
    }
`

export const BottomToTop = keyframes`
    from { 
        opacity: 0;
        transform: translateY(50%);
    } to{
        opacity: 1;
        transform: translateY(0%);
    }
`