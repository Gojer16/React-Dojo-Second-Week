import React from 'react'
import Star from './Star'

const StarRating = ({ maxStars = 5, rating, onRatingChange, children }) => {
  return (
    <div>
       {Array.from({length: maxStars}, (_, i) => (
        <Star 
          key={i}
          filled={i + 1 <= rating}
          onClick={() => onRatingChange(i + 1)}
        />
       ))}
      {children && 
      <div style={{marginTop: "1rem"}}> 
          {children}
      </div>
      }
    </div>
  )
}

export default StarRating