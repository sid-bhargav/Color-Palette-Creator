import React, { useState } from 'react';

// Components
import ColorBox from './components/ColorBox';
import Setting from './components/Setting';

// Icons
import { IoAddSharp } from 'react-icons/io5'

function App() {
  const [useSaturation, setUseSaturation] = useState(true)
  const [useHue, setUseHue] = useState(false)

  const [inputColors, setInputColors] = useState([{color: "hsl(213,9.8%,88.2%)"}])

  const handleAddColor = () => {
    console.log("working!")
    setInputColors((prevColors) => [
      ...prevColors, 
      {
        color: "hsl(213,9.8%,88.2%)"
      }
    ])
  }
  
  return (
    <div className="p-5 font-inter">
      {/* Title */}
      <div className="flex justify-between items-center text-2xl">
        <h1>Colors</h1>
        <h1>Sid's Palette Creator</h1>
      </div>

      {/* Color inputs */}
      <div className="flex gap-4">
        <div className="flex gap-4">
          {inputColors.map((color, index) => (
            <ColorBox key={index} color={color.color}/>
          ))}
        </div>
        <div className="w-[4rem] h-[4rem] border-2 border-blue-600 flex justify-around items-center text-3xl text-blue-600"
        onClick={handleAddColor}>
          <IoAddSharp className=""/>
        </div>
      </div>

      <Setting title="Saturation" value={useSaturation} onClick={() => setUseSaturation(!useSaturation)}/>
      <Setting title="Hue" value={useHue} onClick={() => setUseHue(!useHue)}/>
    </div>
  );
}

export default App;
