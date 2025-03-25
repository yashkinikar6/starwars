import React from 'react';

function Pagination({ next, previous, onPageChange }) {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(previous)} disabled={!previous}>
        Previous
      </button>
      <button onClick={() => onPageChange(next)} disabled={!next}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
