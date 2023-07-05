import { useEffect, useState } from 'react';
import './App.css';
import data from './data/data';
import BlockParametr from './component/blockParametr';


function App() {

  return (
    <div className="wrapper">
      <div className="main__info">
        <div className='text__result'>
          Your Result
        </div>
        <div className='circle__info'>
          <div className='big__text'>
            76
          </div>
          <div className='small__text'>
            of 100
          </div>
        </div>
        <div className='text__great'>
          Great
        </div>
        <div className='text__about__test'>
          <p>You scored higher than 65% of the people
          who have taken these tests.</p>
        </div>
      </div>
      <div className="summary__info">
        <div className='text__summary'> 
          Summary
        </div>
        {data.map(data => {
          return(<BlockParametr data={data}/>)
        })}
        <div className='block__button'>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
