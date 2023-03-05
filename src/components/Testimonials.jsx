import { useState } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { ImQuotesLeft } from 'react-icons/im';

import SectionHead from './SectionHead';
import Card from '../UI/Card';

import { testimonials } from '../data';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const { name, avatar, quote, job } = testimonials[index];

  const handleTestimonialPrev = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const handleTestimonialNext = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className='testimonials'>
      <div className='container testimonials__container'>
        <SectionHead
          className='testemonials__head'
          icon={<ImQuotesLeft />}
          title='Testimonials'
        />
        <Card className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt={name} />
          </div>
          <p className='testimonial__quote'>{quote}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className='testimonials__btn-container'>
          <button className='testimonials__btn' onClick={handleTestimonialPrev}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className='testimonials__btn' onClick={handleTestimonialNext}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
