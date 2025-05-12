import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState('default');
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const handleLinkHover = () => setCursorVariant('hover');
    const handleLinkLeave = () => setCursorVariant('default');
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(103, 116, 242, 0.5)',
      mixBlendMode: 'difference' as const
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(103, 116, 242, 0.3)',
      mixBlendMode: 'difference' as const
    },
    click: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(242, 103, 116, 0.5)',
      mixBlendMode: 'difference' as const
    }
  };
  // Hide on mobile/touch devices
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsVisible(!isTouchDevice);
  }, []);
  if (!isVisible) return null;
  return <motion.div className="cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none rounded-full" variants={variants} animate={cursorVariant} transition={{
    type: 'spring',
    stiffness: 500,
    damping: 28
  }} />;
};
export default AnimatedCursor;