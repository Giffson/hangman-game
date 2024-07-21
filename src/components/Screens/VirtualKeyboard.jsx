import React, { useEffect, useState } from 'react';

const VirtualKeyboard = ({ selectedKeys, list , resetKeys}) => {
  const [disabled, setDisabled] = useState([]);

  const HandleKeys = (event) => {
    const key = event.target.textContent.toUpperCase();
    if (!disabled.includes(key)) {
      selectedKeys(key);
    
      setDisabled(prevState => [...prevState, key]);
    }
  };

  const HandleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (list.includes(key) && !disabled.includes(key)) {
      selectedKeys(key);
      setDisabled(prevState => [...prevState, key]);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyPress);
   
    return () => document.removeEventListener('keydown', HandleKeyPress);
  }, [list, disabled]);

  useEffect(() => {
    if (resetKeys) {
      setDisabled([]);
    }
  }, [resetKeys]);
  // const alphabetArr = list.split("");

  return (
    <div className={`Virtualkeyboard flex flex-wrap gap-2 justify-center  `}>
      {
        list.split('').map((item, index) => {
          const isDisabled = disabled.includes(item);
          return (
            <button
              className={`p-2 rounded-md  text-base basis-[35px] h-[35px] md:h-auto md:flex-grow-0 md:basis-[75px] bg-blue-200 hover:bg-blue-500 md:text-base lg:text-xl font-medium ${isDisabled ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
              key={index}
              onClick={HandleKeys}
              disabled={isDisabled}
              // style={{flex:' 0 1 35px'}}
            >
              {item}
            </button>
          );
        })
      }
    </div>
  );
};

export default VirtualKeyboard;
