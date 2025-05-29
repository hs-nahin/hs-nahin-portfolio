import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX - 10}px, ${clientY - 10}px)`;
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || 
          e.target.tagName.toLowerCase() === 'a' ||
          e.target.tagName.toLowerCase() === 'input') {
        cursor.style.transform = 'scale(1.5)';
      }
    };

    const handleMouseOut = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return null;
}