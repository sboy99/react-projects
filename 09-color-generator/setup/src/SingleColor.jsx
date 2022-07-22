import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,hex,index}) => {  
  const [alert, setAlert] = useState(false);
  useEffect(() => {
   const timeout= setTimeout(()=>{
      setAlert(false);
      return ()=>clearTimeout(timeout);
    },2500)
  }, [alert])
  const hexCol=`#${hex.toUpperCase()}`;
  const bcg=rgb.join(',');
  // const hex=rgbToHex(...rgb);
  return <article className={`color ${index > 10 &&`color-light`}` } style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexCol);
  }} >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexCol}</p>
  {alert && <p className='alert'>Copied to Clipoard</p> }
  </article>
}

export default SingleColor
