import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ leftIcon, rightIcon, children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black font-medium text-lg hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
);
Button.displayName = "Button";

export default Button; 