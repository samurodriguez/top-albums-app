import AlbumSong from "./AlbumSong";

const AlbumSongsList = ({ songs, changeSong }) => {
  return (
    <ul className="albumSongsList">
      {songs.map((song) => {
        const { trackId, trackName, previewUrl } = song;

        return (
          <li key={trackId}>
            <AlbumSong
              trackName={trackName}
              previewUrl={previewUrl}
              changeSong={changeSong}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumSongsList;
