import React, { useState } from 'react';
import {reviews} from '../util/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, recent, github } = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
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
  return (
    <article className='review'>
      <div className="imgContainer">
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{text}</p>
      <div className="btnContainer">
        <a href={github}>GitHub</a>
        <a href={recent}>Recent</a>
      </div>
      <div className="arrowContainer">
        <button onClick={() => prevPerson()} className="arrow left"><AiOutlineArrowLeft/></button>
        <button onClick={() => nextPerson()} className="arrow right"><AiOutlineArrowRight/></button>
      </div>
    </article>
  );
};

export default Review;
