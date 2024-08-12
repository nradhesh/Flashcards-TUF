// src/App.js
import React from 'react';
import FlashcardList from './components/FlashcardList';

const App = () => {
  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks similar to XML or HTML' },
    { question: 'What is a component?', answer: 'A reusable piece of UI' },
    // Add more flashcards here
  ];

  return (
    <div className="App">
      <h1>Flashcard Learning Tool</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;
