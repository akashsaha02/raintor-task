import React from "react";

export default function SkeletonLoader({ width = "w-full", height = "h-6", rounded = "rounded" }) {
  return (
    <div className={`bg-gray-300/30 animate-pulse ${width} ${height} ${rounded}`}></div>
  );
} 