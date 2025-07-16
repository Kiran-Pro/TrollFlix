import React, { useEffect } from "react";
import { fetchRomanceAsync } from "../store/netflixRomanceSlice";
import Row from "../Row/Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixRomance({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixRomanceSlice
  );

  useEffect(() => {
    dispatch(fetchRomanceAsync());
  }, [dispatch]);

  return (
    <Row
      loading={loading}
      error={error}
      title="TROLLFLIX ROMANCE"
      movies={movies}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixRomance;
