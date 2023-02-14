

import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function ColorPiker() {
  const [currentColor, setCurrentColor] = useState("pink")
  // const handleOnChange = (color) => {
  //   setCurrentColor(color.hex)
  //   // console.log(color.hex)
  // }
  const appStyle = {
    backgroundColor: currentColor,
    width: "700px"
  }

  return (
    <>
      <div style={appStyle}>
        <h1>ColorPiker</h1>
        <h1>{currentColor}</h1>
        <input type='text' onChange={(e) => setCurrentColor(e.target.value)} />
        <input type='color' value={currentColor}/>
        {/* <ChromePicker
          color={currentColor}
          onChangeComplete={handleOnChange} /> */}
      </div>
      <div style={appStyle} className="div2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit minima doloribus ipsa fuga voluptas, quibusdam esse adipisci omnis harum libero a,
         recusandae dolor sunt dolorum reprehenderit ratione excepturi deserunt.
      </div>
    </>
  )
}

export default ColorPiker;
