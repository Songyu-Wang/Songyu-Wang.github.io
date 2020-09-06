'use strict';
const ImageGallery = require('react-image-gallery').default;

const React = require('react');


const Gallery = React.createClass({

  render: function () {
    const images = [
    {
      original: '../../public/images/triplebyte.jpg',
      thumbnail: '../../public/images/triplebyte.jpg'
    },
    {
      original: '../../public/images/eit.jpg',
      thumbnail: '../../public/images/eit.jpg'
    },
    {
      original: '../../public/images/pspo.jpg',
      thumbnail: '../../public/images/pspo.jpg'
    },
    {
      original: '../../public/images/psm.jpg',
      thumbnail: '../../public/images/psm.jpg',
    },
    {
      original: '../../public/images/google it auto.jpg',
      thumbnail: '../../public/images/google it auto.jpg'
    },
    {
      original: '../../public/images/mta.jpg',
      thumbnail: '../../public/images/mta.jpg'
    },
    ]
    return (
      <ImageGallery items={images} showPlayButton={false}/>
      );
  }
});

module.exports = Gallery;
