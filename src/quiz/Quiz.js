import React, { useState } from "react";
import './Quiz.css';

const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("A");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = () => {
    if (answer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  const resetQuiz = () => {
    setShowResult(false);
    setAnswer("");
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        <img src="https://p4.itc.cn/images01/20210120/b01d37cc8fea4fe1932786fbad66e5e6.png" alt="小轿车" />
        <h2>小型轿车每小时的碳排放量大概多少？</h2>
        <label>
          <input
            type="radio"
            name="answer"
            value="A"
            onChange={(e) => setAnswer(e.target.value)}
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="B"
            onChange={(e) => setAnswer(e.target.value)}
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="C"
            onChange={(e) => setAnswer(e.target.value)}
          />
          3
        </label>
        <br />
        <button onClick={checkAnswer}>Submit</button>
        <br />
        {showResult && (
          <div>
            <p>
              Your answer: {answer}, {isCorrect ? "correct" : "incorrect"}
            </p>
            <p>
              The correct answer is: {correctAnswer}
            </p>
            <button onClick={resetQuiz}>Reset Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
