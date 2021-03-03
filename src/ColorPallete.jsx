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
    document.body.style.backgroundColor = bgColor
  }
  const onClickHandler = (color) => {
    setCopyColor(color)
    setIsDisplay(true)
    setTimeout(() => {
      setIsDisplay(false)
    }, 2000)
  }
  return (
    <div>
      <div className='container'>
        <div style={{ marginTop: '7rem' }} className='row'>
          <h1 className='col-4'>Color Pallete</h1>
          <div
            style={{ display: isDisplay ? 'block' : 'none' }}
            className='alert alert-secondary col-4 text-center'
            role='alert'
          >
            {copyColor} copied to clipboard!
          </div>
        </div>
        <div className='row mx-auto'>
          {colors.map((item, index) => (
            <CopyToClipboard
              key={index}
              text={copyColor}
              className='col-xs-12 col-md-2 m-3 p-5 colorPallete'
            >
              <div
                onClick={() => onClickHandler(item)}
                onMouseOver={() => hoverHandler(item)}
                style={{ backgroundColor: item }}
              >
                {item}
              </div>
            </CopyToClipboard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorPallete
