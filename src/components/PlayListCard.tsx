"use client";

import IconButton from "@/components/elements/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import { PlayList, Song } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiPlay } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";

type PlayListCardProps = {
  playlist: PlayList;
};

export default function PlayListCard({ playlist }: PlayListCardProps) {
  const { id, owner, playlistName, songList } = playlist;

  const songListLength = songList.length;
  const imgSrc = (getRandomElementFromArray(songList) as Song).imageSrc;
  const router = useRouter();

  const onClickPlayList = () => router.push(`/playlist?list=${id}`);

  return (
    <article className="h-60 cursor-pointer group" onClick={onClickPlayList}>
      <section className="relative h-36">
        <Image
          src={imgSrc}
          alt={playlistName}
          fill
          className="object-cover rounded-md"
        />
        <div className="relative h-full hidden group-hover:block bg-gradient-to-b from-black/80 top-0 w-full">
          <div className="absolute right-4 top-4">
            <IconButton Icon={MdMoreVert} size={20} />
          </div>
          <div
            className="flex justify-center size-[45px] items-center absolute bottom-4 right-4 transform-gpu transition-transform hover:scale-110 hover:bg-black bg-black/80 rounded-full pl-[2px]"
            onClick={onClickPlayList}
          >
            <IconButton
              Icon={FiPlay}
              size={24}
              className="hover:bg-transparent"
            />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLength}개`}</div>
      </section>
    </article>
  );
}
