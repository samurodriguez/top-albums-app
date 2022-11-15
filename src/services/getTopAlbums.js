const getTopAlbums = async () => {
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://api.allorigins.win/raw?url=https://rss.applemarketingtools.com/api/v2/es/music/most-played/50/albums.json"
    )}`
  );

  if (!res.ok) {
    throw new Error("No se pudieron cargar los álbums. Prueba más tarde");
  }

  const body = await res.json();

  const fetchedAlbums = JSON.parse(body.contents).feed.results;

  return fetchedAlbums;
};

export default getTopAlbums;
