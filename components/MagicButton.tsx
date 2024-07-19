import React from "react";

const MagicButton = ({ title, icon, position, handleCLick, otherClasses }:
    { title: string; icon?: React.ReactNode; position?: string; handleCLick?: () => void; otherClasses?: string }
) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D7D7D7_0%,#1F1F1F_50%,#D7D7D7_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses} gap-2`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
