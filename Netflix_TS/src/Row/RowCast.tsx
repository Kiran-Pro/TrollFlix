import "./Row.css";
import { Cast } from "../types/cast";
import CastPoster from "../components/CastPoster";
import { Link } from "react-router-dom";
import { MediaType } from "../types/mediaType";

interface Props {
  cast: Cast;
  mediaType: MediaType;
  mediaId: string;
}

function RowCast({ cast, mediaType, mediaId }: Props) {
  return (
    <div className="row">
      <br />
      <br />

      <div className="rowalign">
        <Link className="link" to={`/${mediaType}/${mediaId}/cast/${cast.id}`}>
          <CastPoster cast={cast} />
          <h4>{cast.name}</h4>
        </Link>
      </div>
    </div>
  );
}

export default RowCast;
