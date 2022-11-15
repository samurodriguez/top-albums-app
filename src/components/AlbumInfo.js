const AlbumInfo = ({ className, name, artistName, artwork }) => {
  return (
    <article className={className}>
      <img src={artwork} alt={`${name} artwork`} />

      <div>
        <h2 className="ellipsis" title={name}>
          {name}
        </h2>
        <h3>{artistName}</h3>
      </div>
    </article>
  );
};

export default AlbumInfo;
