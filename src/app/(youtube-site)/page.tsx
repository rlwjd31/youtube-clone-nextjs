import Category from "@/app/(youtube-site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { PlayList } from "@/types";

export default async function Home() {
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9" />
        <Category />
        <div className="mt-16" />
        <PlayListCarousel
          title="다시 듣기"
          subTitle="도도"
          playlistArray={[...(dummyPlaylistArray as PlayList[])]}
          Thumbnail={
            <div className="size-14">
              <UserIcon size="lg" />
            </div>
          }
        />
        <div className="mt-16" />
        <PlayListCarousel
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
          playlistArray={[...(dummyPlaylistArray as PlayList[])]}
        />
        <div className="mt-16" />
        <PlayListCarousel
          title="커뮤니티 제공"
          playlistArray={[...(dummyPlaylistArray as PlayList[])]}
        />
        <div className="mt-16" />
        <PlayListCarousel
          title="커버 및 리믹스"
          playlistArray={[...(dummyPlaylistArray as PlayList[])]}
        />
      </div>
    </PagePadding>
  );
}
