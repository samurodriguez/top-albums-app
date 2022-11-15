import { useParams } from "react-router-dom";
import useAlbumWithSongs from "../hooks/useAlbumWithSongs";
import LoadingIcon from "../components/LoadingIcon";
import ErrorMessage from "../components/ErrorMessage";
import AlbumInfo from "../components/AlbumInfo";
import AlbumSongsList from "../components/AlbumSongsList";

const AlbumWithSongs = () => {
  const { id } = useParams();
  const { album, loading, error, changeSong } = useAlbumWithSongs(id);

  if (loading) {
    return <LoadingIcon />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const {
    info: { name, artistName, artwork },
    songs,
  } = album;

  return (
    <>
      {name && (
        <AlbumInfo
          className="albumInfo"
          name={name}
          artistName={artistName}
          artwork={artwork.replace("100x100", "500x500")}
        />
      )}

      {songs.length > 0 ? (
        <AlbumSongsList songs={songs} changeSong={changeSong} />
      ) : (
        <p className="noSongs">No hay canciones disponibles 🙁</p>
      )}
    </>
  );
};

export default AlbumWithSongs;
