'use client';
import React, { useEffect, useRef, ComponentType } from 'react';
import { gsap } from 'gsap';

// Define a type for the props of the wrapped component
type WrappedComponentProps = {
  [key: string]: any; // You can specify more specific props if needed
};

const Transition = (WrappedComponent: ComponentType<WrappedComponentProps>) => {
  const TransitionComponent: React.FC<WrappedComponentProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const tl = gsap.timeline();
      tl.from(containerRef.current, { opacity: 0, y: 50, duration: 0.5 }) // Slide up effect
        .to(containerRef.current, { opacity: 1, y: 0, duration: 0.5 });
    }, []);

    return (
      <div ref={containerRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return TransitionComponent;
};

export default Transition;