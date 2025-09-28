import DarkButton from "@/components/elements/DarkButton";
import IconButton from "@/components/elements/IconButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { getRandomElementFromArray } from "@/lib/utils";
import { PlayList } from "@/types";
import Image from "next/image";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";

type PlayListHeadProps = {
  playlist: PlayList;
};

export default function PlayListHead({ playlist }: PlayListHeadProps) {
  const { owner, playlistName, songList } = playlist;
  const randomSong = getRandomElementFromArray(songList);

  return (
    <section className="flex flex-col items-center gap-12 lg:flex-row">
      <div className="relative size-40 lg:size-60">
        <Image
          alt="songImg"
          fill
          src={randomSong.imageSrc}
          className="object-cover"
        />
      </div>
      <article className="flex flex-col justify-center">
        <div>{playlistName}</div>
        <div className="text-neutral-400 mt-4 text-sm">
          <div>{`앨범 • ${owner} • 2019`}</div>
          <div>{`${songList.length}곡 • 15분`}</div>
        </div>
        <ul className="gap-4 mt-4 flex">
          <WhiteButton
            icon={<FiPlay />}
            label="재생"
            className="w-24 text-sm"
          />
          <DarkButton
            icon={<FiFolderPlus />}
            label="보관함에 저장"
            className="w-36 text-sm"
          />
          <IconButton icon={<FiMoreVertical size={24} />} />
        </ul>
      </article>
    </section>
  );
}
