import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`inline-block bg-[#831747] text-[#F8D4E4] font-iranYekan text-lg px-6 py-2 rounded-full ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
