"use client";

import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { IconType } from "react-icons";

type IconButtonProps<T extends IconType> = {
  icon: ReactElement<T>;
  onClickIcon?: () => void;
  className?: string;
};

export default function IconButton<T extends IconType>({
  icon,
  onClickIcon = () => {},
  className,
}: IconButtonProps<T>) {
  return (
    <div
      className={cn(
        "flex justify-center items-center size-9 hover:bg-white/20 rounded-full cursor-pointer",
        className
      )}
      onClick={onClickIcon}
    >
      {icon}
    </div>
  );
}
