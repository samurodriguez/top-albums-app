const getAlbumWithSongs = async (id) => {
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

  return { info: { name, artistName, artwork }, songs };
};

export default getAlbumWithSongs;
