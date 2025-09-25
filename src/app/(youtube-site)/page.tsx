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
        <div className="mt-12" />
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
      </div>
    </PagePadding>
  );
}
