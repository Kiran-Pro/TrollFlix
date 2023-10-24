import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { useParams } from "react-router-dom";
import CastDetails from "./CastDetails";
import { fetchCastDetailsAsync } from "../store/CastDetailSlice";

function CastDetailContainerWrapper() {
  const dispatch = useAppDispatch();
  const { error, loading, castDetails } = useAppSelector(
    (state) => state.castDetails
  );
  console.log(castDetails);
  const { id: personId } = useParams();

  console.log("cast", castDetails);

  useEffect(() => {
    if (personId) {
      dispatch(fetchCastDetailsAsync({ personId }));
    }
  }, [dispatch, personId]);

  if (loading) {
    return <div>Person Details Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!castDetails) {
    return <div>Nothing found</div>;
  }

  return <CastDetails castDetails={castDetails} />;
}

export default CastDetailContainerWrapper;
