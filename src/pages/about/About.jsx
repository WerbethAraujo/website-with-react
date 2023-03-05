import Header from '../../components/Header';

import bgImage01 from '../../images/header_bg_1.jpg';
import storyImage from '../../images/about1.jpg';
import visionImage from '../../images/about2.jpg';
import missionImage from '../../images/about3.jpg';

import './about.css';

const About = () => {
  return (
    <>
      <Header image={bgImage01} title='About Us'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a. Ab
        possimus fugit doloremque sed quam dolor explicabo consequuntur tenetur.
      </Header>

      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={storyImage} alt='about story' />
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quisquam blanditiis aut! Fuga omnis magnam, doloribus eaque soluta
              inventore, quasi molestias rerum impedit, ipsam nobis quam. In
              debitis perferendis fugit, accusamus facere ipsum aliquam quod rem
              ab modi ad dicta optio iure, fugiat accusantium totam voluptatibus
              ut autem illo minima.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quisquam blanditiis aut! Fuga omnis magnam, doloribus eaque soluta
              inventore, quasi molestias rerum impedit, ipsam nobis quam. In
              debitis perferendis fugit,
            </p>
            <p>
              accusamus facere ipsum aliquam quod rem ab modi ad dicta optio
              iure, fugiat accusantium totam voluptatibus ut autem illo minima.
            </p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className='container about__vision-container'>
          <div className='vision__section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quisquam blanditiis aut! Fuga omnis magnam, doloribus eaque soluta
              inventore, quasi molestias rerum impedit, ipsam nobis quam. In
              debitis perferendis fugit, accusamus facere ipsum aliquam quod rem
              ab modi ad dicta optio iure, fugiat accusantium totam voluptatibus
              ut autem illo minima.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quisquam blanditiis aut! Fuga omnis magnam, doloribus eaque soluta
              inventore, quasi molestias rerum impedit, ipsam nobis quam. In
              debitis perferendis fugit,
            </p>
          </div>
          <div className='about__section-image'>
            <img src={visionImage} alt='about vision' />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={missionImage} alt='about mission' />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quisquam blanditiis aut! Fuga omnis magnam, doloribus eaque soluta
              inventore, quasi molestias rerum impedit, ipsam nobis quam. In
              debitis perferendis fugit, accusamus facere ipsum aliquam quod rem
              ab modi ad dicta optio iure, fugiat accusantium totam voluptatibus
              ut autem illo minima.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quisquam blanditiis aut! Fuga omnis magnam, doloribus eaque soluta
              inventore, quasi molestias rerum impedit, ipsam nobis quam. In
              debitis perferendis fugit,
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
