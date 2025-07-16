import "../Row/Row.css";
import { Cast } from "../types/cast";
import RowCast from "../Row/RowCast";
import { MediaType } from "../types/mediaType";

interface Props {
  castList: Cast[];
  mediaType: MediaType;
  mediaId: string;
  //onSelect: (cast: Cast) => void;
}

function CastList({ castList, mediaType, mediaId }: Props) {
  return (
    <>
      <div className="castlist">
        {castList.length > 0
          ? castList.map((cast, key) => {
              return (
                <RowCast
                  key={key}
                  cast={cast}
                  mediaType={mediaType}
                  mediaId={mediaId}
                />
              );
              //return <RowCast cast={cast} onSelect={(cast) => onSelect(cast)} />
            })
          : "No cast is found"}
      </div>
    </>
  );
}

export default CastList;
