import React, { useState } from 'react';
function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !reviewText || !rating) {
      alert('Please fill all fields');
      return;
    }

    const newReview = {
      username,
      email,
      reviewText,
      rating,
    };

    setReviews([newReview, ...reviews]);

  
    setUsername('');
    setEmail('');
    setReviewText('');
    setRating('');
  };

  return (
    <div className="container">
      <h1>Review App</h1>
      <form className="form" onSubmit={handleSubmit}>
      
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)}/>

         <label>Email:</label>
        <input type="email" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/>

         <label>Reviews:</label>
        <textarea placeholder="Write your review" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? 's' : ''}
            </option>
          ))}
        </select>
        <button type="submit">Submit Review</button>
      </form>

      <div className="review-list">
        <h2>Submitted Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.username} ({review.email})</h3>
              <p>{review.reviewText}</p>
              <p>⭐ {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Form;