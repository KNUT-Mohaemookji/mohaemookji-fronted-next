import React, {useEffect} from 'react';

// useRef props로 넘겼을 때 타입 알아보기
const useScrollEvent = (element: React.RefObject<HTMLDivElement>, setEventState:  React.Dispatch<React.SetStateAction<boolean>>) => {
    useEffect(() => {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {                    
                    setEventState(entry.isIntersecting);
                } else {
                    setEventState(entry.isIntersecting);
                }
            })
        })
        for(let i = 0; i < element.current!.children.length; i++) {
            io.observe(element.current!.children[i]);
        }
    }, [element, setEventState])
    return setEventState;

};

export default useScrollEvent;