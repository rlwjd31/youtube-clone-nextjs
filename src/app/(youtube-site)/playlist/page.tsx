import HeaderBgChanger from "@/components/HeaderBgChanger";
import PlayListHead from "@/components/PlayListHead";
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
    <div className="relative h-screen">
      <HeaderBgChanger imageSrc={randomImgSrc} />
      <PlayListHead playlist={playlist} />
    </div>
  );
}
