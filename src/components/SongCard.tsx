"use client";

import { TopSong } from "@/types";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";

type SongCardProps = {
  song: TopSong;
};

export default function SongCard({ song }: SongCardProps) {
  const { imageSrc, name, prevRank, rank } = song;
  return (
    <article className="relative group flex gap-4 items-center h-12 min-w-96 cursor-pointer">
      <div className="size-12 relative bg-red-600 shrink-0">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
        <section className="absolute top-0 hidden group-hover:flex bg-black/40 cursor-pointer size-12 items-center justify-center">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex items-center gap-4">
        <div>
          {rank === prevRank ? (
            <FaCircle size={10} />
          ) : rank > prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{rank + 1}</div>
      </div>
      <div>
        <div>{name}</div>
      </div>
      <section className="w-3/2 bg-black  flex absolute items-center right-12 h-12">
        <IconButton Icon={FiThumbsUp} size={20} />
        <IconButton Icon={FiThumbsDown} size={20} />
        <IconButton Icon={FiMoreVertical} size={20} />
      </section>
    </article>
  );
}
