import React, { useState } from 'react';
import data from './data';

import SingleQuestion from './Question';

function App() {
  const renderedQuestions = () => {
    return data.map((question) => {
      return <SingleQuestion {...question} />;
    });
  };

  return <article>{renderedQuestions()}</article>;
}

export default App;
