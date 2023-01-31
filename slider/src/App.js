import React, { useState, useEffect } from 'react';
import data from './data';
import ReviewsSection from './ReviewsSection';
import Review from './Review';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const renderedReviews = people.map((person, personIndex) => {
    return (
      <Review
        key={person.id}
        {...person}
        personIndex={personIndex}
        index={index}
        people={people}
      />
    );
  });

  return (
    <ReviewsSection
      renderedReviews={renderedReviews}
      index={index}
      setIndex={setIndex}
    />
  );
}

export default App;
