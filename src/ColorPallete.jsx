import React, { useState, useEffect } from 'react'
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
    setTimeout(() => {
      setIsDisplay(false)
    }, 6000)
  }
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])
  return (
    <div>
      <div className='container  text-center'>
        {/* Title and Invisible Alert */}
        <div style={{ marginTop: '7rem' }} className='row'>
          <h1 className='col-4'>Color Pallete</h1>
          <div className='col-4' style={{ position: 'relative' }}>
            <div
              style={{ display: isDisplay ? 'block' : 'none' }}
              className='alert alert-secondary  text-center'
              role='alert'
            >
              {copyColor} copied to clipboard!
            </div>
          </div>
        </div>

        {/* Parent for individual item */}
        <div className='row'>
          {/* Indiviual Item */}
          {colors.map((item, index) => (
            <CopyToClipboard
              key={index}
              text={copyColor}
              className='col-xs-12 mx-2 my-2 col-md-2 col-lg-2 p-5 colorPallete'
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
