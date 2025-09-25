import Category from "@/app/(youtube-site)/explore/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import { PlayList } from "@/types";

const page = async () => {
  const [playlistArray, songlistTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4" />
      <Category />
      <div className="mt-20" />
      <PlayListCarousel
        playlistArray={playlistArray as PlayList[]}
        title="새 앨범 및 싱글"
        subTitle="새로운 앨범"
      />
      <div className="mt-20" />
      <SongListCarousel
        songListTop10={songlistTop10}
        title="인기곡"
        subTitle="새로운 앨범"
      />
    </PagePadding>
  );
};

export default page;
