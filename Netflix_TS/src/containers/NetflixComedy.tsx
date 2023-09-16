import { useEffect } from "react";
import Row from "../Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";
import { fetchComedyAsync } from "../store/netflixComedySlice";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixComedy({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixComedySlice
  );
  useEffect(() => {
    dispatch(fetchComedyAsync());
  }, []);

  return (
    <Row
      title="NETFLIX COMEDY"
      movies={movies}
      loading={loading}
      error={error}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixComedy;
