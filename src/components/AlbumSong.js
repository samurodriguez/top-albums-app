const AlbumSong = ({ trackName, previewUrl, changeSong }) => {
  return (
    <article className="albumSong">
      <h2>{trackName}</h2>

      <audio
        src={previewUrl}
        onPlay={(e) => {
          changeSong(e.target);
        }}
        controls
      >
        Tu navegador no soporta la etiqueta audio de HTML5
      </audio>
    </article>
  );
};

export default AlbumSong;
