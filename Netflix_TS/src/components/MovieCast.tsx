import { useEffect } from "react";
import "./MovieCast.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { fetchCastAsync } from "../store/CastSlice";
import { MediaType } from "../types/mediaType";
import CastList from "../containers/CastList";
import { fetchMovieAsync } from "../store/MovieSlice";
import MovieList from "../containers/MovieList";

interface Props {
  mediaType: MediaType;
}

function MoreDetails({ mediaType }: Props) {
  const dispatch = useAppDispatch();

  const { movies } = useAppSelector((state) => state.movieSlice);
  const { error, loading, castList } = useAppSelector(
    (state) => state.castSlice
  );

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      dispatch(
        fetchMovieAsync({
          mediaType,
          movieId,
        })
      );
    }
    if (movieId) {
      dispatch(
        fetchCastAsync({
          mediaType,
          movieId,
        })
      );
    }
  }, []);

  //const [selectedCast, setSelectedCast] = useState<Cast | null>(null);

  return (
    <div className="box">
      {loading ? (
        <div>Movie Details Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <MovieList movie={movies} />
      )}

      {loading ? (
        <div>Cast Details Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h1 className="cast_headline">Cast</h1>
          <CastList
            castList={castList}
            // onSelect={(cast) => setSelectedCast(cast)}
          />
        </div>
      )}
    </div>
  );
}

export default MoreDetails;
