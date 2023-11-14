import "../Row/Row.css";
import { ICastDetails } from "../types/castDetails";
import CastDetailsPoster from "./CastDetailsPoster";

type Props = {
  castDetails: ICastDetails;
};

function CastDetails({ castDetails }: Props) {
  return (
    <div
      className="row_movie"
      style={{
        backgroundSize: "100% auto",
        backgroundPosition: "center center",
        backdropFilter: "blur(8px)",
      }}
    >
      <br />
      <br />
      <div>
        <CastDetailsPoster castDetails={castDetails} />
      </div>
      <div className="bg_movie">
        <h1 className="title">{castDetails.name}</h1>

        <br />
        <div>
          Birth Place: <b>{castDetails.place_of_birth}</b>{" "}
        </div>
        <br />
        <div>
          Known for: <b>{castDetails.known_for_department}</b>{" "}
        </div>
        <br />
        <div>
          <b>Biography :</b>
          <br />
          <br /> <div>{castDetails.biography}</div>
        </div>
        <br />

        <div>
          <b>Popularity:</b> {castDetails.popularity}%
        </div>
        <br />
        <div>
          <span className="imdb">IMDB ID</span> : {castDetails.imdb_id}
        </div>
        <br />
      </div>
    </div>
  );
}

export default CastDetails;
