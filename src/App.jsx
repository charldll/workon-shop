import {useState} from "react";

import './App.css';
import Images from './components/Images.jsx';
import Button from './components/Button.jsx';
import Description from './components/Description.jsx';
import descriptions from './data/descriptions.js';
import Image from './components/Image.jsx';
import imgs from './data/imgs.js';

function App() {
  
  const [description, setDescription] = useState("");
  const [img, setShowImage] = useState();

  const changeDescription = (descriptionKey) => {
    setDescription(descriptionKey);
  };

  const changeImage = (imageNo) => {
    setShowImage(imageNo);
  };

  const [imageToggle, setImageToggle] = useState(false);

  function buttonToggle () {
    setImageToggle((previous) => !previous);
  }

  return (
    <div>
      <Images />
      <h1>Vite + React</h1>
      <div className="buttons">
        <Button onClick={() => {
          changeDescription("first"),
          changeImage(0)
        }}
          isActive = {description === "first"}
        >
          First
          </Button>
        <Button onClick={() => {
          changeDescription("second"),
          changeImage(1)
          }}
          isActive = {description === "second"}
        >
          Second
          </Button>
        <Button onClick = {() => {
          changeDescription("third"),
          changeImage(2)
        }}
				isActive = {description === "third"}
        >
          Third
          </Button>
        <Button onClick = {() => {
          changeDescription("fourth"),
          changeImage(3)
        }}
        isActive = {description === "fourth"}
        >
          Fourth
        </Button>
      </div>
      <div className="card">
				<h3>Descriptions</h3>
				{description ?
					(<div>
              <Description>
                {descriptions[description]}
              </Description>
              <button onClick = {buttonToggle}>
                {imageToggle ? "Hide picture" : "Show picture"}
              </button>
              {imageToggle && <img src={imgs[img]}/>}
            </div>
        ) : (<p>Please select description</p>)}
				{/* i fcking hate the word descriptioooon */}
				{/* {description && (<Description>{descriptions[description]}</Description>)}
				{!description && <p>Please select description</p>} */}
				{/* ^zapis alternatywny żeby uniknąć głeobkich zagnieżdżeń etc. */}
        
      </div>
    </div>
  );
};

export default App;
