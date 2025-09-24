import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  onClickIcon: () => void;
};

export default function IconButton({ Icon, onClickIcon = () => {} }: Props) {
  return (
    <div
      className="flex justify-center items-center size-9 hover:bg-white/20 rounded-full cursor-pointer"
      onClick={onClickIcon}
    >
      <Icon size={24} />
    </div>
  );
}
