import React from "react";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

function Pagination({ page, totalPages, onChange }: Props) {
  const onPrev = () => {
    onChange(page - 1);
  };

  const onNext = () => {
    onChange(page + 1);
  };

  return (
    <div>
      <button onClick={onPrev} disabled={page === 1}>
        Previous Page
      </button>{" "}
      <button onClick={onNext} disabled={page === totalPages}>
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
