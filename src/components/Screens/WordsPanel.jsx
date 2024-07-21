import React, { useEffect, useMemo, useState } from 'react';

const WordsPanel = ({ SelectedCategory, list, pressedItem, level, ChangeLevel }) => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [answer, setAnswer] = useState(false);

  // Find the index of the selected category
  const categoryIndex = useMemo(() => list.findIndex(items => items.category === SelectedCategory), [SelectedCategory, list]);
  const category = useMemo(() => list[categoryIndex], [categoryIndex, list]);

  // Default to a valid level
  const validLevel = useMemo(() => {
    if (category && level >= 0 && level < category.words.length) {
      return level;
    }
    // Reset to 0 or any valid default level if out of range
    return 0;
  }, [category, level]);

  const wordObj = category ? category.words[validLevel] : { word: '', hint: '' };
  const getWord = wordObj.word;
  const getHints = wordObj.hint;

  // Split the word into individual letters
  const puzzleLetters = useMemo(() => getWord.toUpperCase().split(''), [getWord]);
  const pressedKey = pressedItem;

  // Function to validate the pressed key and update correct guesses
  const validate = (pressedKey, puzzleLetters) => {
    if (puzzleLetters.includes(pressedKey) && !correctGuesses.includes(pressedKey)) {
      setCorrectGuesses(prevState => [...prevState, pressedKey]);
    }
  };

  const isWordComplete = (puzzleLetters) => {
    return puzzleLetters.every(letter => correctGuesses.includes(letter));
  };

  useEffect(() => {
    validate(pressedKey, puzzleLetters);
  }, [pressedKey]);

  useEffect(() => {
    if (isWordComplete(puzzleLetters)) {
      setAnswer(true);
      const timer = setTimeout(() => {
        ChangeLevel('completed');
        setCorrectGuesses([]);
        setAnswer(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [correctGuesses]);

  return (
    <div className='self-stretch'>
      <h1 className='text-3xl mb-4 text-center tracking-widest text-white'>
        {SelectedCategory}
      </h1>
      <p className='hint mb-12 text-center text-2xl text-blue-400 font-medium'>{getHints}</p>
      <p className={`hint mb-12 text-center text-2xl text-green-400 transition-all duration-300 font-medium ${answer ? 'opacity-100' : 'opacity-0'}`}>
        Correct Answer
      </p>
      <div className='panel flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4'>
        {puzzleLetters.length > 0 ? (
          puzzleLetters.map((item, index) => (
            <span
              className='h-[35px] md:h-[60px] text-xl text-white font-semibold text-center bg-slate-800 rounded-lg flex items-center justify-center md:text-3xl border-none outline-none basis-[35px] md:basis-[55px]'
              key={index}
            >
              {correctGuesses.includes(item) ? item : ''}
            </span>
          ))
        ) : (
          <p className='text-center text-white'>No words available</p>
        )}
      </div>
    </div>
  );
};

export default WordsPanel;
