// src/components/FlashcardList.js
import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div>
      <Flashcard flashcard={flashcards[currentIndex]} />
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardList;
