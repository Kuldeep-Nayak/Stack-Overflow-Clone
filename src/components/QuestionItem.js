import React from 'react';
import './QuestionItem.css';

const QuestionItem = ({ question }) => {
  return (
    <div className="question-item">
      <h3><a href={question.link} target="_blank" rel="noopener noreferrer">{question.title}</a></h3>
      <p>{question.body}</p>
    </div>
  );
};

export default QuestionItem;
