import { useState } from "react";
import { useFilterCredits } from "../hooks/useFilterCredits";
import { ICastCredits } from "../types/CastCredits";
import CastCreditPoster from "./CastCreditPoster";
import "./Credits.css";

type Props = {
  castCredits: ICastCredits[];
};

function CastCredits({ castCredits }: Props) {
  const [selectedType, setSelectedType] = useState("all");

  const { filteredCredits } = useFilterCredits(castCredits, selectedType);

  return (
    <div>
      <h1>Credits</h1>

      <div className="alignment">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
        </select>
      </div>
      <div className="row_posters">
        {filteredCredits.map((credit) => (
          <div key={credit.id}>
            <CastCreditPoster castCredits={credit} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CastCredits;
