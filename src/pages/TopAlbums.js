import { Link } from "react-router-dom";
import AlbumInfo from "../components/AlbumInfo";
import ErrorMessage from "../components/ErrorMessage";
import LoadingIcon from "../components/LoadingIcon";
import useTopAlbums from "../hooks/useTopAlbums";

const TopAlbums = () => {
  const { albums, loading, error } = useTopAlbums();

  if (loading) {
    return <LoadingIcon />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <ul className="albumsList">
      {albums.map((album) => {
        const { id, name, artistName, artworkUrl100: artwork } = album;

        return (
          <li key={id}>
            <Link to={`/album/${id}`}>
              <AlbumInfo
                className="albumCard"
                name={name}
                artistName={artistName}
                artwork={artwork.replace("100x100", "300x300")}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopAlbums;
