import Header from '../../components/Header';
import headerImage from '../../images/header_bg_3.jpg';

import './gallery.css';

const Gallery = () => {
  const imagesLenght = 15;
  const images = [];

  for (let i = 1; i <= imagesLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header image={headerImage} title='Our Gallery'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque sunt
        quia earum voluptatem non rem? Iure corrupti repellendus ratione id.
      </Header>

      <section className='gallery'>
        <div className='container gallery__container'>
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`gallery images ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
