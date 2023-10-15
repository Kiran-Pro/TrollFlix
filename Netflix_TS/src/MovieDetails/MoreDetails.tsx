import { useEffect } from "react";
import "../components/MovieCast.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { fetchCastAsync } from "../store/CastSlice";
import { MediaType } from "../types/mediaType";
import CastList from "../containers/CastList";
import { fetchMovieAsync } from "../store/MovieSlice";
import MovieList from "../containers/MoviePedia";
import HomeLink from "../components/HomeLink";

interface Props {
  mediaType: MediaType;
}

function MoreDetails({ mediaType }: Props) {
  const dispatch = useAppDispatch();

  const { movie } = useAppSelector((state) => state.movieSlice);
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

      dispatch(
        fetchCastAsync({
          mediaType,
          movieId,
        })
      );
    }
  }, [dispatch, mediaType, movieId]);

  //const [selectedCast, setSelectedCast] = useState<Cast | null>(null);

  return (
    <div className="box">
      <HomeLink />
      {loading ? (
        <div>Movie Details Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        movie && <MovieList movie={movie} />
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
