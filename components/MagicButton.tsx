import React from "react";

const MagicButton = ({ title, icon, position, handleCLick, otherClasses, className,}:
    { title: string; icon?: React.ReactNode; position?: string; handleCLick?: () => void; otherClasses?: string; className?: string}
) => {
  return (
    <div>
      <button className={`relative inline-flex focus:outline-none overflow-hidden ${className}`}>
        <span className={`absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D2C5B8_30%,#1f1f1f_50%,#D2C5B8_100%)]`} />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center bg-transparent px-7 text-sm font-medium text-beige backdrop-blur-3xl  ${otherClasses} gap-2`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
