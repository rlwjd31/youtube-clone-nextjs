import { ReactNode } from "react";
import { FiMusic } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";

function CategoryMenu({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="hover:bg-neutral-800 transition-all rounded-sm w-full h-14 py-4 px-6 flex gap-4 items-center bg-neutral-700 text-xl cursor-pointer">
      {icon}
      {label}
    </div>
  );
}

export default function Category() {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu label="최신음악" icon={<FiMusic color="#AAAAAA" />} />
      <CategoryMenu label="차트" icon={<FiBarChart color="#AAAAAA" />} />
      <CategoryMenu label="분위기 및 장르" icon={<FiSmile color="#AAAAAA" />} />
    </div>
  );
}
