import React, { useEffect } from "react";
import { fetchRomanceAsync } from "../store/netflixRomanceSlice";
import Row from "../components/Row";
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
  }, []);

  return (
    <Row
      loading={loading}
      error={error}
      title="NETFLIX ROMANCE"
      movies={movies}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixRomance;
