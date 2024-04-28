"use client";
import React from "react";
interface props {
  color?: string;
  size?: string;
  className?: string;
}
function UserCircle({ className = "", size = "32px", color = "black" }: props) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg fill={`${color}`} width={`${size}`} height={`${size}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    </div>
  );
}

export default UserCircle;
