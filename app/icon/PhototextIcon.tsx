import React from 'react';

const PhototextIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v8h16V6H4zm0 10v2h16v-2h-4l-3-3-2 2-3-3-4 4z" />
      <path d="M6 8h2v2H6zM6 14h8v2H6z" />
    </svg>
  );
};

export default PhototextIcon;