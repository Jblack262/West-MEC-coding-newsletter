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
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='info'>{text}</p>

      
      <div className="socials">
        <button>Github</button>
        <div className="outline-button">
          <span/><span/><span/><span/>
          HOVER ME
        </div>
      </div>

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
