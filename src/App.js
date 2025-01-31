import { useState } from 'react';
import './App.css';

const TEST_SENTENCES = [
  "Don't put peanut butter on the dog's nose.",
  "In the end, he realized he could see sound and hear words.",
  "Happiness can be found in the depths of chocolate pudding.",
  "She couldn't decide of the glass was half empty or half full so she drank it.",
  "I'd rather be a bird than a fish.",
  "Mary plays the piano.",
  "He was the only member of the club who didn't like plum pudding.",
  "The furnace repairman indicated the heating system was acting as an air conditioner.",
  "The fish listened intently to what the frogs had to say.",
  "Lucifer was surprised at the amount of life at Death Valley.",
];

function App() {
  const [sentences, updateSentences] = useState(TEST_SENTENCES);
  const [newSentence, updateUserSentence] = useState('');

  const displaySentences = sentences.join(' ');

  return (
    <div className="App container p-2">
      <h1 className="text-2xl">
        StoryBored
      </h1>

      <h2 className="text-left text-2xl text-gray-500 pt-2">
        The Story So Far...
      </h2>

      <div className='p-10 m-10 text-left bg-amber-50 text-gray-800 font-mono text-lg font-thin w-full'>
        {displaySentences}
      </div>
    
      <h2 className="text-left text-2xl text-gray-500 pt-2">
        What's next?
      </h2>

      <div className='p-10 m-10 text-left bg-amber-50 text-gray-800 font-mono text-lg font-thin w-full'>
        <form onSubmit={(e) => {
          e.preventDefault();

          updateSentences([...sentences, newSentence]);
        }}>
          <textarea
            className='w-full border-solid border-2'
            value={newSentence}
            onChange={(e) => updateUserSentence(e.target.value)}
          />
          <input
            className='p-2 bg-slate-700 text-white rounded-lg'
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
