import { useEffect, useState } from "react";
import CastList from "../containers/CastList";
import "./MovieCast.css";
import { Cast } from "../types/cast";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { fetchCastAsync } from "../store/CastSlice";
import { MediaType } from "../types/mediaType";

interface Props {
  mediaType: MediaType;
}

function MovieCast({ mediaType }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, castList } = useAppSelector(
    (state) => state.castSlice
  );

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      dispatch(
        fetchCastAsync({
          mediaType,
          movieId,
        })
      );
    }
  }, []);

  const [selectedCast, setSelectedCast] = useState<Cast | null>(null);

  return (
    <div className="box">
      <h1>Cast</h1>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <CastList
          castList={castList}
          onSelect={(cast) => setSelectedCast(cast)}
        />
      )}
    </div>
  );
}

export default MovieCast;
