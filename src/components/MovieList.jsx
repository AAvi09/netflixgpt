import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>{console.log("No movies available")}</div>;
  }
  console.log(movies);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-gray-200 mb-4 p-2 m-2">
          {title}
        </h1>
        <div className="flex  overflow-x-auto space-x-0 scrollbar-hide">
          {movies.map((movie) => (
            <div className="flex-shrink-0 w-36" key={movie.id}>
              <MovieCard posterPath={movie?.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
