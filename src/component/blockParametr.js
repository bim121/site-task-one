import React from 'react'

export default function BlockParametr(props) {
  const classOfBlock = `block__parametr__info ${props.data.color}`;
  const textOfBlock = `text__parametr {props.data.color}`;
  return (
    <div className={classOfBlock}>
        <div className='block__right__info'>
            <img alt="#" src={props.data.icon}></img>
            <div className={textOfBlock}>
                {props.data.category}
            </div>
        </div>
        <div className='block__left__info'>
        <span className='bold__text'>{props.data.score}</span> /<span className='unbold__text'>100</span>
        </div>
    </div>
  )
}
