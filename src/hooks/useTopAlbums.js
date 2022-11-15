import { useState, useEffect } from "react";
import getTopAlbums from "../services/getTopAlbums";

const useTopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);

        const fetchedAlbums = await getTopAlbums();

        setAlbums(fetchedAlbums);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return { albums, loading, error };
};

export default useTopAlbums;
