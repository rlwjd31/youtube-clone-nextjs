import { cn } from "@/lib/utils";
import { ComponentProps, ReactElement } from "react";
import { IconType } from "react-icons";

type WhiteButtonProps<T extends IconType> = {
  icon: ReactElement<T>;
  label: string;
  className?: string;
  props?: ComponentProps<"div">;
};

export default function WhiteButton<T extends IconType>({
  icon,
  label,
  className,
  ...props
}: WhiteButtonProps<T>) {
  return (
    <div
      className={cn(
        "cursor-pointer min-w-20 h-9 p-4 gap-2 bg-white text-black rounded-2xl flex items-center hover:bg-neutral-200 border border-neutral-700",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
