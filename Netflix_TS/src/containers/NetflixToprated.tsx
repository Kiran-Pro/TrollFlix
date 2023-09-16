import React, { useEffect } from "react";
import Row from "../Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";
import { fetchTopratedAsync } from "../store/netflixTopratedSlice";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixToprated({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixTopratedSlice
  );
  useEffect(() => {
    dispatch(fetchTopratedAsync());
  }, []);

  return (
    <Row
      title="NETFLIX TOP RATED"
      movies={movies}
      loading={loading}
      error={error}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixToprated;
