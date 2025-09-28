import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { redirect } from "next/navigation";
import { FiMusic, FiShuffle } from "react-icons/fi";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const channel = await getChannelById(+id);

  if (!channel) return redirect("/");
  const { name } = channel;

  const { imageSrc } = getRandomElementFromArray(channel.songList);
  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-40" />
      <section>
        <div className="text-3xl font-bold">{name}</div>
        <div className="flex flex-col-reverse gap-4 text-sm mt-4 lg:flex-row lg:items-center">
          <div className="flex gap-4">
            <WhiteButton icon={<FiShuffle size={16} />} label="셔플" />
            <WhiteButton icon={<FiMusic size={16} />} label="뮤직 스테이션" />
          </div>
          <DarkButton
            label="구독중 4.18만"
            className="w-60 justify-center hover:bg-neutral-700 border border-neutral-700"
          />
        </div>
      </section>
      <section className="mt-20">
        <div className="text-3xl font-bold">노래</div>
        <div className="mt-5">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, idx) => (
              <SongCardRowExpand song={song} key={idx} />
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-20">
        <div className="text-3xl font-bold">앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
    </PagePadding>
  );
}
