import SongCard from "@/components/SongCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import { TopSong } from "@/types";
import React, { ReactNode } from "react";

type songListCarouselProps = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  songListTop10: TopSong[];
};

function SongColumn({ songList }: { songList: TopSong[] }) {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song) => (
        <SongCard key={song.channelId} song={song} />
      ))}
    </div>
  );
}

export default function SongListCarousel({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
}: songListCarouselProps) {
  const chunkedTop10List = chunkArray<TopSong>(songListTop10, 4);

  return (
    <Carousel className="w-ful ">
      <div className="flex justify-between items-end my-2">
        <article className="flex gap-3">
          {Thumbnail}
          <div className="flex flex-col justify-center">
            <div>
              {subTitle && <div className="text-neutral-200">{subTitle}</div>}
            </div>
            <div className="text-4xl font-bold leading-9">{title}</div>
          </div>
        </article>
        <div className="relative left-[-46px]">
          <div className="absolute bottom-5">
            <CarouselPrevious />
            <CarouselNext className="left-2" />
          </div>
        </div>
      </div>
      <CarouselContent className="mt-4">
        {chunkedTop10List.map((chunkedList, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 2xl:basis-1/3  "
          >
            <SongColumn songList={chunkedList} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
