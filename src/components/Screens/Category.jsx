import React from 'react'


const Category = ({selectedCategory,list}) => {

  const selectedCate = (value) => {
    selectedCategory(value.target.textContent)
  }

  return (
    <>
    <h1 className='text-3xl mb-12 text-center tracking-widest text-white'>Pick a Category</h1>
    <div className='categories w-[250px] flex flex-col gap-y-6'>
    {
        list.map((item, index) =>{
            return(
                <button key={index} className='px-4 py-2 text-white w-full text-lg font-medium border-2 border-blue-700 bg-blue-800 rounded-2xl' onClick={selectedCate}>{item.category}</button>
                
            )
        })
    }
  
    </div>
    </>
  
  )
}

export default Category