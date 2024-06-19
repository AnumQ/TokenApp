// components/LoadingDots.tsx

import React from "react";

const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-white rounded-full animate-dot-blink-1"></div>
      <div className="w-3 h-3 bg-white rounded-full animate-dot-blink-2"></div>
      <div className="w-3 h-3 bg-white rounded-full animate-dot-blink-3"></div>
    </div>
  );
};

export default LoadingDots;
