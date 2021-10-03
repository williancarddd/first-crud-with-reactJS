import react from 'react'
import './style.css'
export const Card = react.memo(function Card({ children, onclick}){
  return (
    <>
      <div className='card-div' onClick={onclick}>
        {children}
      </div>
    </>
  )
})