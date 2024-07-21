const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const categories = [
  {
    category: 'Fruits',
    words: [
      { word: 'Apple', hint: 'A common fruit that is often red or green.' },
      { word: 'Banana', hint: 'A long, yellow fruit that is high in potassium.' },
      { word: 'Cherry', hint: 'A small, red fruit with a pit in the middle.' },
      { word: 'Date', hint: 'A sweet, sticky fruit often eaten dried.' },
      { word: 'Elderberry', hint: 'A dark purple fruit used to make syrups and jams.' }
    ]
  },
  {
    category: 'Animals',
    words: [
      { word: 'Lion', hint: 'The king of the jungle, known for its majestic mane.' },
      { word: 'Tiger', hint: 'A large, striped cat found in Asia.' },
      { word: 'Elephant', hint: 'The largest land animal with a trunk.' },
      { word: 'Giraffe', hint: 'A tall animal with a long neck and spots.' },
      { word: 'Zebra', hint: 'A horse-like animal with black and white stripes.' }
    ]
  },
  {
    category: 'Countries',
    words: [
      { word: 'Brazil', hint: 'A country known for its carnival and Amazon rainforest.' },
      { word: 'Canada', hint: 'A country known for its maple syrup and cold winters.' },
      { word: 'France', hint: 'The country famous for the Eiffel Tower and croissants.' },
      { word: 'Japan', hint: 'An island country known for its cherry blossoms and technology.' },
      { word: 'India', hint: 'A country known for its diverse culture and spicy cuisine.' }
    ]
  },
  {
    category: 'Colors',
    words: [
      { word: 'Red', hint: 'The color of fire and apples.' },
      { word: 'Blue', hint: 'The color of the sky and ocean.' },
      { word: 'Green', hint: 'The color of grass and leaves.' },
      { word: 'Yellow', hint: 'The color of the sun and bananas.' },
      { word: 'Purple', hint: 'A color often associated with royalty.' }
    ]
  },
  {
    category: 'Programming Languages',
    words: [
      { word: 'Python', hint: 'A popular language known for its readability and use in data science.' },
      { word: 'JavaScript', hint: 'A language commonly used for web development.' },
      { word: 'Java', hint: 'A versatile language often used in enterprise applications.' },
      { word: 'Ruby', hint: 'A dynamic language known for its elegant syntax.' },
      { word: 'Swift', hint: 'A language developed by Apple for iOS and macOS development.' }
    ]
  }
];

export { alphabets, categories };
