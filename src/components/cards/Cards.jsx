import React from 'react';
import './Cards.css';
import cardData from './cards_data.json';

const Cards = () => {
  return (
    <section className='cards__section'>
      <div className='card__container'>
        {cardData.map((card, i) => {
          const {
            card_id,
            cardHeading,
            cardCount,
            cardIconType,
            cardIconName,
            cardIconSize,
          } = card;
          return (
            <div className={`card__${card_id}`} key={i}>
              <div className={`card__${card_id}_icon`}>
                <i
                  className={`${cardIconType} ${cardIconName} ${cardIconSize}`}></i>
              </div>
              <div className={`card__${card_id}_info`}>
                <h2>{cardHeading}</h2>
                <p>{cardCount}</p>
              </div>
            </div>
          );
        })}

        {/* <div className='card__1'>
          <div className='card__1_icon'>
            <i className='fa-regular fa-user fa-2x'></i>
          </div>
          <div className='card__1_info'>
            <h2>Number of subscribers</h2>
            <p>578</p>
          </div>
        </div>
        <div className='card__2'>
          <div className='card__2_icon'>
            <i className='fa-regular fa-calendar-days fa-2x'></i>
          </div>
          <div className='card__2_info'>
            <h2>Times of watching</h2>
            <p>2433</p>
          </div>
        </div>
        <div className='card__3'>
          <div className='card__3_icon'>
            <i className='fa-solid fa-video fa-2x'></i>
          </div>
          <div className='card__3_info'>
            <h2>Number of videos</h2>
            <p>342</p>
          </div>
        </div>
        <div className='card__4'>
          <div className='card__4_icon'>
            <i className='fa-regular fa-thumbs-up fa-2x'></i>
          </div>
          <div className='card__4_info'>
            <h2>Number of Likes</h2>
            <p>1213</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Cards;
