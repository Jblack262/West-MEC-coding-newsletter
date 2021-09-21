import React, { useState } from 'react';
import people from '../util/data';
import { FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  console.log(image)
  return (
    <article className='review'>
      <div className="cardHeader">
          <div className="btnContainer">
          <a href="#">Github</a>
          </div>
        <div className='img-container'>
          <div className="image">
          <img src={image} alt={name} className='person-img' />
          </div>
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
          <div className="btnContainer">
          <a href="#">Recent Work</a>
          </div>
      </div>
      
      <h4 className='author'>{name}</h4>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <span onClick={prevPerson}>
          <button className="prev" />
        </span>
        <span onClick={nextPerson}>
          <button className="next" />
        </span>
      </div>
      
    </article>
  );
};

export default Review;
