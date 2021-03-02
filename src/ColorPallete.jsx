import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const ColorPallete = () => {
  const [bgColor, setBgColor] = useState('')
  const [copyColor, setCopyColor] = useState('')
  const [isDisplay, setIsDisplay] = useState(false)
  const colors = [
    '#D91A4C',
    '#DB8943',
    '#025373',
    '#943154',
    '#62316A',
    '#D85E55',
    '#D9C11D',
    '#199CCF',
    '#D6628A',
    '#805088',
    '#F26C50',
    '#58A4B0',
    '#373F51',
    '#daa49a',
    '#e3c0d3',
    '#95818d',
    '#2c514c',
  ]
  const hoverHandler = (color) => {
    setBgColor(color)
  }
  const onClickHandler = (color) => {
    setCopyColor(color)
    setIsDisplay(true)
    const timeout = setTimeout(() => {
      setIsDisplay(false)
    }, 2000)
  }
  return (
    <div
      className='mainContainer'
      style={{ backgroundColor: bgColor, height: '100vh' }}
    >
      <h1>Color Pallete</h1>
      <div className='containerr'>
        {colors.map((item) => (
          <CopyToClipboard text={copyColor}>
            <div
              onClick={() => onClickHandler(item)}
              onMouseOver={() => hoverHandler(item)}
              style={{ backgroundColor: item }}
              className='colorPallete'
            >
              {item}
            </div>
          </CopyToClipboard>
        ))}
      </div>
      <div
        style={{ display: isDisplay ? 'block' : 'none' }}
        class='alert alert-secondary col-4 mx-auto text-center'
        role='alert'
      >
        {copyColor} copied to clipboard!
      </div>
    </div>
  )
}

export default ColorPallete
