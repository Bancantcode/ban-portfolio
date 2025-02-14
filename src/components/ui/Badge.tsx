import React from 'react'

interface BadgeProps {
    text: string;
    styles: string;
    children: string;
  }

const Badge: React.FC<BadgeProps> = ({ text, styles, children }) => {
  return (
    <span className={`bg-[#1C182D] text-[#C1B1FF] rounded-[0.4rem] border border-[#40317A] ${styles}`}>
      {children}
      {text}
    </span>
  )
}

export default Badge
