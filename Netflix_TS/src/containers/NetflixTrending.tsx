import React, { useEffect } from "react";
import { fetchNetflixTrendingAsync } from "../store/netflixTrendingSlice";
import Row from "../Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixTrending({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixTrendingSlice
  );
  useEffect(() => {
    dispatch(fetchNetflixTrendingAsync());
  }, []);

  return (
    <Row
      loading={loading}
      error={error}
      title="NETFLIX TRENDING"
      movies={movies}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixTrending;
