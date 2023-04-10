"use client";

import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      flex
      justify-center
      items-center
     relative
     rounded-lg 
     transition 
     disabled:opacity-70
     disabled:cursor-not-allowed
     hover:opacity-80
     w-full 
     ${
       outline
         ? "bg-white border-black text-black"
         : "bg-rose-500 border-rose-500 text-white"
     }
     ${
       small
         ? "py-1 border text-sm font-light"
         : "py-2 border-2 text-md font-semibold"
     }
    `}
    >
      {Icon && <Icon size="20" className="absolute left-3" />}
      {label}
    </button>
  );
}

export default Button;
