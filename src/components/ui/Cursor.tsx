import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleTextSelection = () => {
      setIsSelecting(true);
    };

    const handleTextSelectionEnd = () => {
      setIsSelecting(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('selectstart', handleTextSelection);
    document.addEventListener('selectionchange', handleTextSelectionEnd);

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .card, input, textarea');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => setIsHovering(true));
      element.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      // Cleanup event listeners
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('selectstart', handleTextSelection);
      document.removeEventListener('selectionchange', handleTextSelectionEnd);
    };
  }, []);

  // Don't render cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  const cursorClasses = [
    'minecraft-cursor',
    isHovering ? 'hover' : '',
    isClicking ? 'click' : '',
    isSelecting ? 'selecting' : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x - 8}px`,
        top: `${position.y - 8}px`,
        transform: `translate(0, 0) ${isHovering ? 'scale(1.2)' : ''} ${isClicking ? 'scale(0.9)' : ''}`
      }}
    />
  );
};

export default Cursor;