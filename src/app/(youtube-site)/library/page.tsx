import Category from "@/app/(youtube-site)/library/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCard from "@/components/PlayListCard";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { PlayList } from "@/types";

export default function Page() {
  return (
    <PagePadding>
      <div className="mt-9" />
      <Category />
      <div className="mt-12" />
      <section className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <PlayListCard
            playlist={getRandomElementFromArray(dummyPlaylistArray) as PlayList}
            key={index}
          />
        ))}
      </section>
      <div className="mt-12" />
    </PagePadding>
  );
}
