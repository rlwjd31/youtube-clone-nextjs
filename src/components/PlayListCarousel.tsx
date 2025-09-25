import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayList } from "@/types";
import React, { ReactNode } from "react";

type PlayListCarouselProps = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  playlistArray: PlayList[];
};

export default function PlayListCarousel({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}: PlayListCarouselProps) {
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
      <CarouselContent>
        {playlistArray.map((playlist, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">{playlist.playlistName}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
