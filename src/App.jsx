import {useState} from "react";

import './App.css';
import Images from './components/Images.jsx';
import Button from './components/Button.jsx';
import Description from './components/Description.jsx';
import descriptions from './data/descriptions.js';

function App() {
  
  const [description, setDescription] = useState("");

  const changeDescription = (descriptionKey) => {
    setDescription(descriptionKey);
  };

  return (
    <div>
      <Images />
      <h1>Vite + React</h1>
      <div className="buttons">
        <Button onClick={() => {
          changeDescription("first");
          }}
          isActive = {description === "first"}
					>
            First
          </Button>
        <Button onClick={() =>{
          changeDescription("second");
        }}
				isActive = {description === "second"}
        >
          Second
          </Button>
        <Button onClick = {() => {
          changeDescription("third");
        }}
				isActive = {description === "third"}
        >
          Third
          </Button>
      </div>
      <div className="card">
				<h3>Descriptions</h3>
				{
					description ?
					(<Description>{descriptions[description]}</Description>)
					: <p>Please select description</p>
				}
				{/* i fucking hate the word descriptioooon */}
				{/* {description && (<Description>{descriptions[description]}</Description>)}
				{!description && <p>Please select description</p>} */}
				{/* ^zapis alternatywny żeby uniknąć głeobkich zagnieżdżeń etc. */}
      </div>
    </div>
  );
};

// TODO dodać czwarty sprawny przycisk

export default App;
