import React, { useState } from 'react';
import {reviews} from '../util/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Helmet } from 'react-helmet';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, recent, github, year } = reviews[index];
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
      <Helmet>
          <title>Coding Newsletter</title>
      </Helmet>
      <div className="imgContainer">
        
        <span>
          <span className='badge'>Yr {year}</span>
          <img src={image} alt={name} />
        </span>
      </div>
      <h1>{name}</h1>
      <p>{text}</p>
      <div className="btnContainer">
        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={recent} target="_blank" rel="noopener noreferrer">Recent</a>
      </div>
      <div className="arrowContainer">
        <button onClick={() => prevPerson()} className="arrow left"><AiOutlineArrowLeft/></button>
        <button onClick={() => nextPerson()} className="arrow right"><AiOutlineArrowRight/></button>
      </div>
    </article>
  );
};

export default Review;
