const Banner = ({ item }) => {
  return (
    <>
      <img src={item.Poster} alt="Img" width="25px" height="50px" />
      <h4>Title: {item.Title}</h4>
      <h4>Released: {item.Released}</h4>
      <p>Director: {item.Director}</p>
    </>
  );
};
export default Banner;
