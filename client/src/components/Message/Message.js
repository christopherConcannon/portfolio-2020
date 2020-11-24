import React from 'react'
import './Message.css'

const Message = ({ children })=> {
  return (
    <div>
      	{/* <p className={`Contact-${variant}-text`}>{children}</p> */}
      	<p className='Message-text'>{children}</p>
    </div>
  )
}

export default Message