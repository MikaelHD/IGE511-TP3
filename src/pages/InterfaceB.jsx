import React from 'react';
import './InterfaceB.css';

const cards = [  { title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },  { title: 'Card 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },  { title: 'Card 3', content: 'Integer ultrices aliquam tellus, ut condimentum massa tristique vel.' },];

const images = [  { src: 'https://via.placeholder.com/450x150', alt: 'Placeholder image 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },  { src: 'https://via.placeholder.com/450x150', alt: 'Placeholder image 2', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },  { src: 'https://via.placeholder.com/450x150', alt: 'Placeholder image 3', text: 'Integer ultrices aliquam tellus, ut condimentum massa tristique vel.' },];

function InterfaceB() {
  return (
    <div>
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="images-container" style={{ display: 'flex', flexDirection: 'column' }}>
        {images.map((image, index) => (
          <div className={index % 2 === 0 ? 'image' : 'image-reverse'} key={index}>
            <div>
              <p>{image.text}</p>
            </div>
            <img src={image.src} alt={image.alt} style={{ width: 450, height: 150, objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterfaceB;
