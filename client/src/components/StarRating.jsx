import React from 'react'
import Star from './Star'

const StarRating = ({ rating, onRatingChange, children }) => {
  return (
    <div>
        {[1, 2, 3, 4, 5].map((index) => (
        <Star 
          key={index}
          filled={index <= rating}
          onClick={() => onRatingChange(index)}
        />
      ))}
      <div style={{ marginTop: "1rem" }}>
        {children}
      </div>
    </div>
  )
}

export default StarRating