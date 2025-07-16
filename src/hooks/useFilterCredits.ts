import { useMemo } from "react";
import { ICastCredits } from "../types/CastCredits";

export function useFilterCredits(
  castCredits: ICastCredits[],
  selectedType: string
) {
  const filteredCredits = useMemo(() => {
    if (selectedType === "all") {
      return castCredits;
    } else {
      return castCredits.filter((credit) => credit.media_type === selectedType);
    }
  }, [castCredits, selectedType]);

  return { filteredCredits };
}
