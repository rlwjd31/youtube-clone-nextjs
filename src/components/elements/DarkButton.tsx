import { cn } from "@/lib/utils";
import { ComponentProps, ReactElement } from "react";
import { IconType } from "react-icons";

type DarkButtonProps<T extends IconType> = {
  icon: ReactElement<T>;
  label: string;
  className?: string;
  props?: ComponentProps<"div">;
};

export default function DarkButton<T extends IconType>({
  icon,
  label,
  className,
  ...props
}: DarkButtonProps<T>) {
  return (
    <div
      className={cn(
        "cursor-pointer min-w-20 h-9 p-4 gap-2 bg-black text-white rounded-2xl flex items-center hover:bg-neutral-700",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
