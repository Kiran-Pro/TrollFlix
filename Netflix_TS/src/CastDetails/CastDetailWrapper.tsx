import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { useParams } from "react-router-dom";
import CastDetails from "./CastDetails";
import { fetchCastDetailsAsync } from "../store/CastDetailSlice";
import { fetchCastCreditsAsync } from "../store/CastCreditsSlice";
import CastCredits from "./CastCredits";

function CastDetailContainerWrapper() {
  const dispatch = useAppDispatch();

  const { error, loading, castDetails } = useAppSelector(
    (state) => state.castDetails
  );
  const { castCredits } = useAppSelector((state) => state.CastCreditsSlice);

  const { id: personId } = useParams();

  useEffect(() => {
    if (personId) {
      dispatch(fetchCastDetailsAsync({ personId }));
      dispatch(fetchCastCreditsAsync({ personId }));
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
  } else if (!castCredits) {
    return <div>Nothing found</div>;
  }

  return (
    <div>
      <CastDetails castDetails={castDetails} />
      <CastCredits castCredits={castCredits} />
    </div>
  );
}

export default CastDetailContainerWrapper;
