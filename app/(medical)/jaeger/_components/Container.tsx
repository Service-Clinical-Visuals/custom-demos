import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`custom-container jaeger-root w-full mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
}
