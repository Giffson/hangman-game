import React, {  useEffect, useState } from 'react';

const WordsPanel = ({ SelectedCategory, list, pressedItem, level, ChangeLevel }) => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [answer, setAnswer] = useState(false)

  // Find the index of the selected category and get the word
  const categoryIndex = list.findIndex((items) => items.category === SelectedCategory);
  const wordObj = list[categoryIndex].words[level];
  const getWord = wordObj.word;
  const getHints = wordObj.hint;

  // Split the word into individual letters
  const puzzleLetters = getWord.toUpperCase().split('');
  const pressedKey = pressedItem;

  // Function to validate the pressed key and update correct guesses
  
  const validate = (pressedKey,puzzleLetters) => {
        if(puzzleLetters.includes(pressedKey)){
            setCorrectGuesses(prevState => [...prevState,pressedKey])
            
        }
    }

    const isWordComplete = (puzzleLetters) =>{
        return  puzzleLetters.every(letter => correctGuesses.includes(letter))
       
    }
   

  
    useEffect(()=> {
        validate(pressedKey,puzzleLetters)
      
        },[pressedKey]) 

        useEffect(()=> {
           
            if(isWordComplete(puzzleLetters)){
              setAnswer(true)
               setTimeout(()=> {
                ChangeLevel('completed')
                setCorrectGuesses([])
                setAnswer(false)
               },1000)
            }
            },[correctGuesses]) 
    
  
  return (
    <>
      <div className='self-stretch'>
        <h1 className='text-3xl mb-4 text-center tracking-widest text-white'>
          {SelectedCategory}
        </h1>
    
          <p className='hint  mb-12  text-center text-2xl text-blue-400 font-medium'>{getHints}</p>
       
      <p className={`hint  mb-12  text-center text-2xl  text-green-400 transition-all duration-300 font-medium ${answer ? 'opacity-100' : 'opacity-0'}`}>Correct Answer</p>
       
        <div className='panel flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4'>
          {puzzleLetters.map((item, index) => {

                            
            return (
            <span
              className=' h-[35px] md:h-[60px] text-xl text-white font-semibold text-center bg-slate-800 rounded-lg flex items-center justify-center md:text-3xl border-none outline-none basis-[35px] md:basis-[55px]'
              key={index}  
            >
              {correctGuesses.includes(item) ? item : ''}
            </span>
          )})}
        </div>
      </div>
    </>
  );
};

export default WordsPanel;
