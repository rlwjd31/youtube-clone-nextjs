import { dummyPlaylistArray } from "@/lib/dummyData";
import { IoMdPlayCircle } from "react-icons/io";

type Props = {
  playlist: (typeof dummyPlaylistArray)[number];
};

export default function PlayList({ playlist }: Props) {
  const { owner, playlistName } = playlist;

  const onClickPlayList = () => {};

  return (
    <li className="group mx-3 px-4 h-14 flex justify-between items-center hover:bg-neutral-700 rounded-lg">
      <div>
        <div className="text-sm">{playlistName}</div>
        <div className="text-xs text-neutral-500">{owner}</div>
      </div>
      <div>
        <div
          className="hidden group-hover:block cursor-pointer"
          onClick={onClickPlayList}
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
}
