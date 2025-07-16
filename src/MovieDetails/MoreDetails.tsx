import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/MovieCast.css";
import CastList from "../containers/CastList";
import MovieList from "../containers/MoviePedia";
import { fetchCastAsync } from "../store/CastSlice";
import { fetchMovieAsync } from "../store/MovieSlice";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { MediaType } from "../types/mediaType";

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

  if (movieId === undefined) {
    return null;
  }

  if (loading) {
    return (
      <>
        <div>Movie Details Loading...</div>
        <div>Cast Details Loading...</div>
      </>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {movie && <MovieList movie={movie} />}

      <h1 className="cast_headline">Cast</h1>
      <CastList
        castList={castList}
        mediaId={movieId}
        mediaType={mediaType}
        // onSelect={(cast) => setSelectedCast(cast)}
      />
    </>
  );
}

export default MoreDetails;
