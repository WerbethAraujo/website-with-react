import Header from '../../components/Header';
import headerImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import './contact.css';

const Contact = () => {
  return (
    <>
      <Header image={headerImage} title='Get In Touch'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        consequuntur corporis nemo, vel consectetur hic adipisci ducimus.
      </Header>

      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a
              href='support@gmail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <MdEmail />
            </a>
            <a
              href='support@gmail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <BsMessenger />
            </a>
            <a
              href='support@gmail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
