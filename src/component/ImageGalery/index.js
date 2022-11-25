import Carousel from 'react-bootstrap/Carousel';
export default function ImageGallery({ images }) {
  return (
    <Carousel fade className='h-100'>
      {images.map((item, index) =>
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      )}
    </Carousel>
  );
}

