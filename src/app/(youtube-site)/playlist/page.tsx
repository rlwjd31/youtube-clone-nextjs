import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ searchParams }: PageProps) {
  const { list } = searchParams;
  const playlist = list ? await getPlaylistById(+list) : null;

  if (!playlist) {
    return redirect("/");
  }

  const randomImgSrc = getRandomElementFromArray(playlist.songList).imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={randomImgSrc} />
      <PlayListHead playlist={playlist} />
      <div className="mt-12" />
      <section className="flex flex-col space-y-3">
        {playlist.songList.map((song, idx) => {
          return <SongCardRowExpand song={song} key={idx} />;
        })}
      </section>
    </PagePadding>
  );
}
