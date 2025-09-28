"use client";

import { Song } from "@/types";
import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";
import { useRouter } from "next/navigation";

type SongCardRowExpandProps = {
  song: Song;
};

export default function SongCardRowExpand({ song }: SongCardRowExpandProps) {
  const { imageSrc, name, channel, channelId } = song;
  const router = useRouter();
  const onClickChannel = () => {
    router.push(`/channel/${channelId}`);
  };

  return (
    <article className="relative group flex gap-4 items-center h-12 min-w-96 cursor-pointer">
      <div className="size-12 relative shrink-0">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
        <section className="absolute top-0 hidden group-hover:flex bg-black/40 cursor-pointer size-12 items-center justify-center">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex gap-4 justify-between basis-1/3">
        <div className="w-24 truncate">{name}</div>
        <div
          className="text-neutral-500 hover:underline cursor-pointer"
          onClick={onClickChannel}
        >
          {channel}
        </div>
      </div>
      <section className="w-3/2 bg-background  flex absolute items-center right-12 h-12">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}
