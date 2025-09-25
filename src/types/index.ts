// song
export type Song = {
  name: string;
  channelId: 1,
  channel: string;
  src: string;
  imageSrc: string;
}

// TopSong
export type TopSong = Song & {
  rank: number;
  prevRank: number;
}

// PlayList
export type PlayList = {
  id: number;
  owner: string;
  playlistName: string;
  songList: Song[]
}

// Channel
export type Channel = {
  id: 1,
  subscribers: 4200,
  name: string;
  songList: Song[];
  playlistArray: PlayList[];
}