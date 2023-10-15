import { useEffect } from "react";
import { fetchHorrorAsync } from "../store/netflixHorrorSlice";
import Row from "../Row/Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixHorror({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixHorrorSlice
  );

  useEffect(() => {
    dispatch(fetchHorrorAsync());
  }, [dispatch]);

  return (
    <Row
      loading={loading}
      error={error}
      title="TROLLFLIX HORRORS"
      movies={movies}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixHorror;
