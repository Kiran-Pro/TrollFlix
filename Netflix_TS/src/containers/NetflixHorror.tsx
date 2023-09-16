import React, { useEffect } from "react";
import netflixHorrorSlice, {
  fetchHorrorAsync,
} from "../store/netflixHorrorSlice";
import Row from "../components/Row";
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
  }, []);

  return (
    <Row
      loading={loading}
      error={error}
      title="NETFLIX HORRORS"
      movies={movies}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixHorror;
