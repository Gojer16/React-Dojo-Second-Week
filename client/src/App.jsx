import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating'
import InputGroup from './components/InputGroup';

function App() {
  const [rating, setRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false
  });

const handleSubmit = (e) => {
  e.preventDefault(); // stop page reload
  if (!formData.name) {
    alert("Name is required");
    return;
  }
  if (!formData.email.includes("@")) {
    alert("Email must be valid");
    return;
  }
  alert("Form submitted successfully ✅");
};


  return (
    <>
      <StarRating
      rating={rating} 
      onRatingChange={setRating} 
      maxStars={5}
      >
      <strong>Rating: {rating}</strong>
      </StarRating>

       <StarRating
      rating={rating} 
      onRatingChange={setRating}
      maxStars={10}
      >
      <strong>Rating: {rating}</strong>
      </StarRating>

    <form onSubmit={handleSubmit}
    >
      <InputGroup
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))}
        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
        error={touched.name && !formData.name ? "Name is required" : ""}
      />

      <InputGroup
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))}
        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
        error={touched.email && !formData.email ? "email is required" : ""}
        />

      <button type="submit">Submit</button>
    </form>
    </> 
  )
}

export default App
