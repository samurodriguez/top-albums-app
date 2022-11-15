import { DAY_IN_MILLISECONDS } from "./constants";

const getAlbumWithSongs = async (id) => {
  const cache = JSON.parse(localStorage.getItem(`album-${id}`));

  const didCacheExpire = Date.now() - cache?.time > DAY_IN_MILLISECONDS;

  if (cache && !didCacheExpire) {
    return cache.data;
  }

  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&entity=song`
    )}`
  );

  if (!res.ok) {
    throw new Error("No se pudo cargar el álbum. Prueba más tarde");
  }

  const body = await res.json();

  const [
    { collectionName: name, artistName, artworkUrl100: artwork },
    ...songs
  ] = JSON.parse(body.contents).results;

  const fetchedAlbum = { info: { name, artistName, artwork }, songs };

  localStorage.setItem(
    `album-${id}`,
    JSON.stringify({ data: fetchedAlbum, time: Date.now() })
  );

  return fetchedAlbum;
};

export default getAlbumWithSongs;
