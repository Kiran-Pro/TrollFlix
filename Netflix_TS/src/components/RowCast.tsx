import "./Row.css";
import { Cast } from "../types/cast";
import CastPoster from "./CastPoster";

interface Props {
  cast: Cast;
  onSelect: (cast: Cast) => void;
}

function RowCast({ cast, onSelect }: Props) {
  return (
    <div className="row">
      <h2>{cast.name}</h2>

      <div onClick={() => onSelect(cast)}>
        <CastPoster cast={cast} />
      </div>
    </div>
  );
}

export default RowCast;
