import React, { useEffect, useState } from 'react';
import { categories, alphabets } from '../../assets/content';
import Category from './Category';
import VirtualKeyboard from './VirtualKeyboard';
import WordsPanel from './WordsPanel';

const MainScreen = () => {
  const [categoryis, setCategoryIs] = useState('');
  const [categoryIsVisible, setCategoryIsVisible] = useState(true);
  const [virtualKeyboard, setVirtualKeyboard] = useState(false);
  const [wordsPanel, setWordsPanel] = useState(false);
  const [key, setKey] = useState('');
  const [level, setLevel] = useState(8);
  const [resetKey, setResetKey] = useState(false);
  const [completeLevel, setCompletedLevel] = useState(false);

  // Select level
  const ChangeLevel = (value) => {
    if (value === 'completed') {
      setResetKey(true);
      setCompletedLevel(true);
    }
  };

  // Remove completed level
  const removeComplete = () => {
    setLevel(prevLevel => {
      const categoryIndex = categories.findIndex(items => items.category === categoryis);
      const maxWords = categoryIndex >= 0 ? categories[categoryIndex].words.length : 0;

      if (level > maxWords) {
        alert('Level reset due to insufficient words!');
        return 0; // Reset level if it's higher than the number of words
      }

      const newLevel = prevLevel + 1;
      // Optionally, save newLevel to localStorage if needed
      // localStorage.setItem('userLevel', newLevel);
      return newLevel;
    });

    setCompletedLevel(false);
  };

  // Handle key press
  const HandleKeys = (value) => {
    if (value !== null) {
      setKey(value);
    }
  };

  // Handle category selection
  const HandleCategory = (value) => {
    setCategoryIs(value);
  };

  useEffect(() => {
    if (categoryis) {
      setCategoryIsVisible(false);
      setVirtualKeyboard(true);
      setWordsPanel(true);
    }
  }, [categoryis]);

  useEffect(() => {
    if (resetKey) {
      setResetKey(false);
    }
  }, [resetKey]);

  return (
    <div className='MainScreen w-full h-full'>
      <div className="container mx-auto h-full">
        <div className="main-screen h-full px-4 xl:px-6 flex flex-col items-center justify-center">
          {categoryIsVisible && <Category selectedCategory={HandleCategory} list={categories} />}
          {wordsPanel && (
            <WordsPanel
              SelectedCategory={categoryis}
              list={categories}
              pressedItem={key}
              level={level}
              ChangeLevel={ChangeLevel}
            />
          )}
          {virtualKeyboard && (
            <div className='self-stretch'>
              <VirtualKeyboard
                selectedKeys={HandleKeys}
                list={alphabets}
                resetKeys={resetKey}
              />
            </div>
          )}
          {completeLevel && (
            <div className='complete fixed z-30 top-0 left-0 bg-slate-900/50 backdrop-blur-sm flex flex-col gap-y-5 items-center justify-center h-full w-full'>
              <h3 className='text-2xl text-center text-white'>Completed, Next round</h3>
              <button
                className='px-4 py-2 rounded-md border-2 font-medium transition-all text-white duration-500 border-slate-100 lg:hover:bg-white lg:hover:text-slate-900'
                onClick={removeComplete}
              >
                Next Stage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
