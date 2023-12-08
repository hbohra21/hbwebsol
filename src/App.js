import React, { useState, useEffect } from 'react';
import QuestionForm from './Components/QuestionForm'

const App = () => {
  return (
    <div className='outerDiv'>
      <div className='mainDiv'>
        <h1>Add Question</h1>
        <QuestionForm />
      </div>
    </div>

  );
};

export default App;
