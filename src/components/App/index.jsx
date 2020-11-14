import React, { useState } from 'react';
import AddCategory from '../AddCategory';
import GifGrid from '../GifGrid';
import './App.css';

function App() {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <div className="App">
      <h2>GifExpertApp</h2>
      <AddCategory 
      setCategories={setCategories}  />
      <hr />
      {
        categories &&  <ol>
        {
          categories.map((category, key) =>(
            <GifGrid key={key} category={category} />
          ))
        }
        </ol>
      }
    </div>
  );
}

export default App;
