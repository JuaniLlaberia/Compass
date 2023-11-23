import { useEffect, useRef } from 'react';

export const useClickOutside = closeFn => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeFn(false);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [closeFn]);

  return { ref };
};
