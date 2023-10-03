import React, { useEffect } from "react";
import { fetchNetlixOriginsAsync } from "../store/netflixOriginsSlice";
import Row from "../components/Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixOriginals({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixOriginsSlice
  );

  useEffect(() => {
    dispatch(fetchNetlixOriginsAsync());
  }, []);

  return (
    <Row
      loading={loading}
      error={error}
      title="TROLLFLIX ORIGINALS"
      movies={movies}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixOriginals;
