import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';
import BlogSection from './components/BlogSection'; 

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="question-section">
          <QuestionList />
        </div>
        <div className="blog-section">
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default App;
