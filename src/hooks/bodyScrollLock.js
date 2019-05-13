import { useLayoutEffect } from 'react';

const useBodyScrollLock = () => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);
};

export default useBodyScrollLock;
