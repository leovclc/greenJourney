import React, { useState } from 'react';
import styles from './Quiz.module.css';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the best definition of greenhouse gases?',
      options: [
        'Gases in the atmosphere that traps heat. The gases consist of carbon dioxide, methane and many more.',
        'Gases that are produced from the plants in Greenhouse/glasshouse.',
        'Gases that are positively impacting the earth\'s atmosphere.',
        'None of the above'
      ],
      correctAnswer: 0
    },
    {
      question: 'What are the causes of carbon emission in Australia ranked?',
      options: [
        'Energy production → Transport → Agriculture → waste',
        'Transport → Energy production → Agriculture → waste',
        'Agriculture → Energy production → Transport → Waste',
        'Waste → Agriculture → Energy Production → Transport'
      ],
      correctAnswer: 0
    },
    {
      question: 'Estimate how much carbon emission Australia produced.',
      options: [
        'Less than 200 Metric Tons',
        '200 to 400 Metric Tons',
        '400 to 600 Metric Tons',
        'More than 600 Metric Tons'
      ],
      correctAnswer: 2
    },
    {
      question: 'How much percentage (%) did transportation contribute to carbon emissions in Australia alone?',
      options: [
        '5% to 10%',
        '10% to 15%',
        '15% to 20%',
        'More than 20%'
      ],
      correctAnswer: 2
    },
    {
      question: 'What are the negative effects of increasing carbon emission?',
      options: [
        'Heat Waves',
        'Increased Sea Levels',
        'Droughts',
        'All of the above'
      ],
      correctAnswer: 3
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(-1);
    setShowAnswer(false);
  };

  return (
    <div className={styles.quiz}>
      <h1>Quiz</h1>
      <p className="question">{questions[currentQuestion].question}</p>
      <form>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit} disabled={selectedOption === -1}>
          Submit
        </button>
      </form>
      {showAnswer && (
        <div>
          {selectedOption === questions[currentQuestion].correctAnswer ? (
            <p>Correct!</p>
          ) : (
            <p>
              Incorrect. The correct answer is:{' '}
              {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
            </p>
          )}
          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleNext}>Next Question</button>
          ) : (
            <p>You have completed the quiz.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
