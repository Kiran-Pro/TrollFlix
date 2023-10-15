import "../Row/Row.css";
import { Cast } from "../types/cast";
import RowCast from "../Row/RowCast";
interface Props {
  castList: Cast[];
  //onSelect: (cast: Cast) => void;
}
function CastList({ castList }: Props) {
  return (
    <>
      <div className="castlist">
        {castList
          ? castList.map((cast, key) => {
              return <RowCast key={key} cast={cast} />;
              //return <RowCast cast={cast} onSelect={(cast) => onSelect(cast)} />
            })
          : "No cast is found"}
      </div>
    </>
  );
}

export default CastList;
