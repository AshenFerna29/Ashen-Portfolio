import React from 'react';
import { motion } from 'framer-motion';
interface AnimatedTextProps {
  text: string | string[];
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  gradient?: boolean;
  typewriter?: boolean;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = 'p',
  className = '',
  once = true,
  delay = 0,
  duration = 0.05,
  gradient = false,
  typewriter = false
}) => {
  const Tag = tag;
  const textArray = Array.isArray(text) ? text : [text];
  const gradientClass = gradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600' : '';
  const combinedClassName = `${className} ${gradientClass}`;
  if (typewriter) {
    return <Tag className={combinedClassName}>
        <motion.span initial={{
        opacity: 1
      }} animate={{
        opacity: 1
      }} className="inline-block">
          {textArray.map((line, lineIndex) => <span key={lineIndex} className="block">
              {Array.from(line).map((char, charIndex) => <motion.span key={charIndex} initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: delay + charIndex * duration + lineIndex * 0.2,
            duration: 0.1
          }} className="inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>)}
            </span>)}
        </motion.span>
      </Tag>;
  }
  return <Tag className={combinedClassName}>
      {textArray.map((line, lineIndex) => <motion.span key={lineIndex} initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once
    }} transition={{
      delay: delay + lineIndex * 0.1,
      duration: 0.5
    }} className="block">
          {line}
        </motion.span>)}
    </Tag>;
};
export default AnimatedText;