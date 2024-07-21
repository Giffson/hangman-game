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
  // const [level, setLevel] = useState(()=> {
  //   const savedLevel = localStorage.getItem('userLevel')
  //   return savedLevel ? parseInt(savedLevel,10) : 0
  // });
  const [level, setLevel] = useState(0)

  const [resetKey, setResetKey] = useState(false);
  const [completeLevel, setCompletedLevel] = useState(false)

  // select level
  const ChangeLevel = (value) => {
    if (value === 'completed') {
    
      setResetKey(true);
      setCompletedLevel(true)
      // alert('You completed the level!');
    }
  };

  const removeComplete = () => {
    setLevel(prevLevel => {
      
     const newLevel = prevLevel + 1
    //  localStorage.setItem('userLevel',newLevel)
     return newLevel
    }
    )
    setCompletedLevel(false)
  }

  

  // keyboard function
  const HandleKeys = (value) => {
    if (value !== null) {
      setKey(value);
    }
  };

  // category functions
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

          {
            completeLevel && <div className='complete fixed z-30 top-0 left-0 bg- flex flex-col bg-slate-900/50 backdrop-blur-sm gap-y-5 items-center justify-center h-full w-full'>
            <h3 className='text-2xl text-center text-white'> Completed , Next round</h3>
            <button className='px-4 py-2 rounded-md border-2 font-meium transition-all text-white duration-500 border-slate-100 lg:hover:bg-white lg:hover:text-slate-900' onClick={removeComplete} >Next Stage</button>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
