import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/useStore";

import { Cast } from "../types/cast";
import { fetchCastAsync } from "../store/CastSlice";
import RowCast from "../components/RowCast";

interface Props {
  castList: Cast[];
  onSelect: (cast: Cast) => void;
}

function CastList({ castList, onSelect }: Props) {
  return (
    <div>
      {castList.map((cast) => {
        return <RowCast cast={cast} onSelect={(cast) => onSelect(cast)} />;
      })}
    </div>
  );
}

export default CastList;
