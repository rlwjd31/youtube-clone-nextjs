"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";


export default function Category() {
  const libraryCategories = [
    "재생목록",
    "팟캐스트",
    "노래",
    "앨범",
    "아티스트",
  ];
  const { category: libraryCategory, setCategory: setLibraryCategory } =
    useUIState();

  const onClickCategory = (category: string) => {
    if (libraryCategory === category) {
      setLibraryCategory("");
    } else {
      setLibraryCategory(category);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <ul className="max-w-full overflow-x-auto flex gap-4">
        {libraryCategories.map((category) => {
          return (
            <li
              className={cn(
                "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer",
                libraryCategory === category && "bg-neutral-700",
                category === libraryCategory &&
                  "bg-white text-black hover:bg-white"
              )}
              key={category}
              onClick={() => onClickCategory(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-40 h-10 flex justify-between items-center cursor-pointer p-4 bg-neutral-600 border border-neutral-500 rounded-3xl text-sm">
              <div>최근활동</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-neutral-800">
            <DropdownMenuLabel className="p-4">정렬 기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-10">
                <FiCheck size={20} />
              </span>
              최근 활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-10">
                <FiCheck size={20} />
              </span>
              최근에 저장됨
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-10">
                <FiCheck size={20} />
              </span>
              최근 재생한 음악
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
