const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const categories = [
  {
    category: 'Fruits',
    words: [
      { word: 'Apple', hint: 'A common fruit that is often red or green.' },
      { word: 'Banana', hint: 'A long, yellow fruit that is high in potassium.' },
      { word: 'Cherry', hint: 'A small, red fruit with a pit in the middle.' },
      { word: 'Date', hint: 'A sweet, sticky fruit often eaten dried.' },
      { word: 'Elderberry', hint: 'A dark purple fruit used to make syrups and jams.' },
      { word: 'Fig', hint: 'A sweet fruit with a chewy skin and many seeds.' },
      { word: 'Grape', hint: 'A small, round fruit that comes in green, red, or purple.' },
      { word: 'Kiwi', hint: 'A brown, fuzzy fruit with bright green flesh.' },
      { word: 'Lemon', hint: 'A sour, yellow fruit often used to add flavor.' },
      { word: 'Mango', hint: 'A tropical fruit with a sweet, juicy flesh.' }
    ]
  },
  {
    category: 'Animals',
    words: [
      { word: 'Lion', hint: 'The king of the jungle, known for its majestic mane.' },
      { word: 'Tiger', hint: 'A large, striped cat found in Asia.' },
      { word: 'Elephant', hint: 'The largest land animal with a trunk.' },
      { word: 'Giraffe', hint: 'A tall animal with a long neck and spots.' },
      { word: 'Zebra', hint: 'A horse-like animal with black and white stripes.' },
      { word: 'Bear', hint: 'A large, strong animal that can be found in forests.' },
      { word: 'Cat', hint: 'A small domesticated feline known for its independence.' },
      { word: 'Dog', hint: 'A loyal domesticated animal often called man\'s best friend.' },
      { word: 'Fox', hint: 'A small, agile animal known for its cunning nature.' },
      { word: 'Horse', hint: 'A large, strong animal often used for riding or work.' }
    ]
  },
  {
    category: 'Countries',
    words: [
      { word: 'Brazil', hint: 'A country known for its carnival and Amazon rainforest.' },
      { word: 'Canada', hint: 'A country known for its maple syrup and cold winters.' },
      { word: 'France', hint: 'The country famous for the Eiffel Tower and croissants.' },
      { word: 'Japan', hint: 'An island country known for its cherry blossoms and technology.' },
      { word: 'India', hint: 'A country known for its diverse culture and spicy cuisine.' },
      { word: 'Australia', hint: 'A country and continent known for its Great Barrier Reef.' },
      { word: 'Germany', hint: 'A country known for its beer and automobiles.' },
      { word: 'Italy', hint: 'A country famous for its pasta, pizza, and art.' },
      { word: 'Mexico', hint: 'A country known for its vibrant culture and cuisine.' },
      { word: 'Spain', hint: 'A country known for its flamenco dance and sunny beaches.' }
    ]
  },
  {
    category: 'Colors',
    words: [
      { word: 'Red', hint: 'The color of fire and apples.' },
      { word: 'Blue', hint: 'The color of the sky and ocean.' },
      { word: 'Green', hint: 'The color of grass and leaves.' },
      { word: 'Yellow', hint: 'The color of the sun and bananas.' },
      { word: 'Purple', hint: 'A color often associated with royalty.' },
      { word: 'Orange', hint: 'A bright color between red and yellow.' },
      { word: 'Pink', hint: 'A light red color often associated with love.' },
      { word: 'Brown', hint: 'The color of wood and earth.' },
      { word: 'Black', hint: 'The color of the night sky and coal.' },
      { word: 'White', hint: 'The color of snow and clouds.' }
    ]
  }
];

export { alphabets, categories };
