import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const ReviewsSection = ({ renderedReviews, index, setIndex }) => {
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {renderedReviews}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
