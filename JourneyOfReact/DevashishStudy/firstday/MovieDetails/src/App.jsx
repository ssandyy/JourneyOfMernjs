import "./App.css";
import Banner from "./banner";
import MovieDatabase from "./MovieDatabase";

const App = () => {
  return (
    <>
      <div id="Moviehead" className="col-6">
        <h3>Movie Threater</h3>
        {MovieDatabase.map((item) => (
          // <Banner key={item.Title} poster={item.Poster} title={item.Title} Released={item.Released} director={item.Director} />
          <Banner key={item.Title} item={item} />
        ))}
      </div>
    </>
  );
};

export default App;
