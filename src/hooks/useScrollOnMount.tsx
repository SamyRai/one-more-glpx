import React from 'react';

/**
 * Custom hook to handle scrolling behavior on component mount and hash changes.
 * If a hash is present in the URL, it scrolls to the corresponding element.
 * Otherwise, it scrolls to the top of the page.
 */
export const useScrollOnMount = () => {
  React.useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Scroll on mount and on hash change
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};
