// Import For React
import { useState, useEffect } from 'react';

// Component Media Query
export const useMediaQuery = (query: string) => {
  // State Media Query
  const [matches, setMatches] = useState(false);

  // Effect Media Query
  useEffect(() => {
    // Media Query
    const mediaQueryList = window.matchMedia(query);

    // Handle Match Change
    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Set Matches
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleMatchChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return matches;
}