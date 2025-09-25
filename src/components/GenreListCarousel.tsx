import GenreCard from "@/components/GenreCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import React, { ReactNode } from "react";

type genreListCarouselProps = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  genreList: string[];
};

function GenreColumn({ genreList }: { genreList: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {genreList.map((genre) => (
        <GenreCard key={genre} genre={genre} />
      ))}
    </div>
  );
}

export default function GenreListCarousel({
  title,
  subTitle,
  Thumbnail,
  genreList,
}: genreListCarouselProps) {
  const chunkedGenreList = chunkArray<string>(genreList, 4);

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
        {chunkedGenreList.map((chunkedList, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
            <GenreColumn genreList={chunkedList} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
