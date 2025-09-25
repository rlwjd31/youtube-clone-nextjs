import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserIconProps = {
  size?: "sm" | "lg";
};

export default function UserIcon({ size = "sm" }: UserIconProps) {
  return (
    <Avatar className={cn("size-[26px]", size === "lg" && "size-14")}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
