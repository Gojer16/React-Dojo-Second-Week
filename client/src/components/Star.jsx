import React from 'react'

const Star = ({filled, onClick}) => {
  return (
    <>
      <span 
        style={{ cursor: "pointer", fontSize: "2rem", color: filled ? "gold" : "gray" }}
        onClick={onClick}
      >
      {filled ? "★" : "☆"}
      </span>
    </>
  )
}

export default Star