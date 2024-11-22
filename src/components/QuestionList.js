import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filter, setFilter] = useState('hot');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
          params: {
            site: 'stackoverflow',
            sort: filter, 
            order: 'desc', 
            tagged: '', 
            pagesize: 5, 
          },
        });
        setQuestions(response.data.items);
        setLoading(false);
      } catch (err) {
        setError('Error fetching questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [filter]); 

 
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="question-list">
      <h2>Top Questions</h2>
      <div className="filters">
        {}
        <button onClick={() => handleFilterChange('hot')} className={filter === 'hot' ? 'active' : ''}>Hot</button>
        <button onClick={() => handleFilterChange('week')} className={filter === 'week' ? 'active' : ''}>Week</button>
        <button onClick={() => handleFilterChange('month')} className={filter === 'month' ? 'active' : ''}>Month</button>
      </div>
      {questions.map((question) => (
        <QuestionItem key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
