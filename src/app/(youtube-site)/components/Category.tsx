"use client";

import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

export default function Category() {
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

  console.log("homeCategory", homeCategory);

  const onClickCategory = (category: { label: string; src: string }) => {
    if (homeCategory === category.label) {
      setHeaderImageSrc("");
      setHomeCategory("");
    } else {
      setHeaderImageSrc(category.src);
      setHomeCategory(category.label);
    }
  };

  return (
    <ul className="max-w-full overflow-x-auto flex gap-4">
      {homeCategoryList.map((item) => {
        return (
          <li
            className={cn(
              "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer",
              homeCategory === item.label && "bg-neutral-700",
              item.label === homeCategory &&
                "bg-white text-black hover:bg-white"
            )}
            key={item.label}
            onClick={() => onClickCategory(item)}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
