import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    isModalOpen,
  } = useGlobalContext();

  if (waiting) return <SetupForm />;

  if (loading) return <Loading />;

  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  console.log(correct_answer);
  answers.splice(tempIndex, 0, correct_answer);

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{isModalOpen ? questions.length : index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, idx) => {
              return (
                <button
                  key={idx}
                  className='answer-btn'
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(correct_answer === answer)}
                />
              );
            })}
          </div>
        </article>
        <button onClick={nextQuestion} className='next-question'>
          next question
        </button>
      </section>
    </main>
  );
};

export default App;
