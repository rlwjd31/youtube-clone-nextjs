import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  onClickIcon?: () => void;
  size?: number;
  className?: string;
};

export default function IconButton({
  Icon,
  onClickIcon = () => {},
  size = 24,
  className,
}: Props) {
  return (
    <div
      className={cn("flex justify-center items-center size-9 hover:bg-white/20 rounded-full cursor-pointer", className)}
      onClick={onClickIcon}
    >
      <Icon size={size} />
    </div>
  );
}
