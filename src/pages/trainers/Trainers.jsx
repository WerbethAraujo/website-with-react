import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

import Header from '../../components/Header';
import Trainer from '../../components/Trainer';
import headerImage from '../../images/header_bg_5.jpg';

import { trainers } from '../../data';

import './trainers.css';

const Trainers = () => {
  return (
    <>
      <Header image={headerImage} title='Our Trainers'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        dolore quisquam dignissimos ut accusantium temporibus labore.
      </Header>

      <section className='trainers'>
        <div className='container trainers__container'>
          {trainers.map(({ id, name, image, job, socials }) => (
            <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <FaInstagram />, link: socials[0] },
                { icon: <FaFacebookF />, link: socials[1] },
                { icon: <FaLinkedin />, link: socials[2] },
                { icon: <FaTwitter />, link: socials[3] },
              ]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;
