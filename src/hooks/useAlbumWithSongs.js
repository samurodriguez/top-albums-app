import { useState, useEffect } from "react";
import getAlbumWithSongs from "../services/getAlbumWithSongs";

const useAlbumWithSongs = (id) => {
  const [album, setAlbum] = useState({ info: {}, songs: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentSong, setCurrentSong] = useState();

  const changeSong = (song) => {
    if (currentSong && currentSong !== song) {
      currentSong.pause();
    }

    setCurrentSong(song);
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        setLoading(true);

        const fetchedAlbum = await getAlbumWithSongs(id);

        setAlbum(fetchedAlbum);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  return { album, loading, error, changeSong };
};

export default useAlbumWithSongs;
