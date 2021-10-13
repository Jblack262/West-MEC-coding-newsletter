import React, { useState } from 'react';
import people from '../util/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, recent, github } = people[index];
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
  return (
    <article className='review'>
      <div className="imgContainer">
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{text}</p>
      <div className="btnContainer">
        <a href={github}><button>GitHub</button></a>
        <a href={recent}><button>Recent</button></a>
      </div>
      <div className="arrowContainer">
        <AiOutlineArrowLeft className="arrow left" onClick={() => prevPerson()}/>
        <AiOutlineArrowRight className="arrow right" onClick={() => nextPerson()}/>
      </div>
    </article>
  );
};

export default Review;
