import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <article>
          <Link to='/'>
            <img src={Logo} alt='logo footer' className='logo' />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ipsa
            animi explicabo inventore ut repellendus? Accusantium quisquam illum
            nemo soluta!
          </p>
          <div className='footer__socials'>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://www.twitter.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trainers'>Trainers</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to='/s'>Blog</Link>
          <Link to='/s'>Case Studies</Link>
          <Link to='/s'>Events</Link>
          <Link to='/s'>Communities</Link>
          <Link to='/s'>FAQs</Link>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/s'>Support</Link>
        </article>
      </div>
      <div className='footer__copyright'>
        <small>2023 EGATOR TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
