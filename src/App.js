import React, {useEffect, useState} from 'react';
import { FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import './App.css';
import data from './data';

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  const { image, name, title, quote} = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex) 
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex) 
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length +1)
    if (randomNumber === index){
      return randomNumber + 1
    }
    console.log(randomNumber)
    setIndex(checkNumber(randomNumber))
  }
  return (
    <section className='section'>
      <div className="main-title">
        <h1>
          Our Reviews
        </h1>        
      </div>
      <div className="section-center">
        <article className='review'>
            <div className="image">
              <img src={image} alt={name} />
              <div class="border"></div>
              <span className='quote-icon'>
                <FaQuoteRight className='icon'/>
              </span>
            </div>
            <h4 className='name'>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <div className="nav-icon">
              <button className='prev-btn' onClick={prevPerson}><FiChevronLeft /></button>
              <button className='next-btn' onClick={nextPerson}><FiChevronRight /></button>
            </div>
            <div className="random">
              <button onClick={randomPerson}>Suprise me</button>
            </div>
          </article>
      </div>
    </section>
  );
}

export default App;
