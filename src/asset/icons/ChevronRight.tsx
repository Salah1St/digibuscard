"use client";
import React from "react";
interface props {
  color?: string;
  size?: string;
  className?: string;
}
function ChevronRight({ className = "", size = "32px", color = "black" }: props) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg width={`${size}`} height={`${size}`} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Icon-Set" transform="translate(-100.000000, -1087.000000)" fill={`${color}`}>
            <path
              d="M116,1117 C108.268,1117 102,1110.73 102,1103 C102,1095.27 108.268,1089 116,1089 C123.732,1089 130,1095.27 130,1103 C130,1110.73 123.732,1117 116,1117 L116,1117 Z M116,1087 C107.164,1087 100,1094.16 100,1103 C100,1111.84 107.164,1119 116,1119 C124.836,1119 132,1111.84 132,1103 C132,1094.16 124.836,1087 116,1087 L116,1087 Z M120.536,1102.12 L112.879,1094.46 C112.488,1094.07 111.855,1094.07 111.464,1094.46 C111.074,1094.86 111.074,1095.49 111.464,1095.88 L118.586,1103 L111.464,1110.12 C111.074,1110.51 111.074,1111.14 111.464,1111.54 C111.855,1111.93 112.488,1111.93 112.879,1111.54 L120.536,1103.88 C120.775,1103.64 120.85,1103.31 120.795,1103 C120.85,1102.69 120.775,1102.36 120.536,1102.12 L120.536,1102.12 Z"
              id="chevron-right-circle"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ChevronRight;
