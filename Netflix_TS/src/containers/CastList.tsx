import "../components/Row.css";
import { Cast } from "../types/cast";
import RowCast from "../components/RowCast";

interface Props {
  castList: Cast[];
  onSelect: (cast: Cast) => void;
}

function CastList({ castList, onSelect }: Props) {
  return (
    <div className="castlist">
      {castList.map((cast) => {
        return <RowCast cast={cast} onSelect={(cast) => onSelect(cast)} />;
      })}
    </div>
  );
}

export default CastList;
