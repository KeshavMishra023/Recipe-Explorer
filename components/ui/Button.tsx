import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode; 
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center cursor-pointer justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-[13px] text-white
        bg-linear-to-r from-[#006646] to-[#00cc8c]
        hover:from-[#005238] hover:to-[#00b578]
        transition-colors duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && icon}
      {children}
    </button>
  );
}
