import "./Pagination.css";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

function Pagination({ page, totalPages, onChange }: Props) {
  const onPrev = () => {
    if (page > 1) onChange(page - 1);
  };

  const onNext = () => {
    if (page < totalPages) onChange(page + 1);
  };

  return (
    <div className="pagination-container">
      <button className="pagination-btn" onClick={onPrev} disabled={page === 1}>
        Previous
      </button>
      <span className="pagination-info">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </span>
      <button
        className="pagination-btn"
        onClick={onNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
