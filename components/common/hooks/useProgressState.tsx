import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useProgressState = () => {
    const router = useRouter();
    const [progressState, setProgressState] = useState<boolean>(false);
    
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setProgressState(true);
        });
        router.events.on('routeChangeComplete', () => {
            setProgressState(false);
        });
    }, [router]);

    return progressState;
};

export default useProgressState;