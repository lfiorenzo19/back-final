import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../../assets/images/1.jpeg";
import imagen2 from "../../assets/images/2.jpeg";
import imagen3 from "../../assets/images/3.jpeg";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "360px", width: "360px" }}
          className="d-block w-100"
          src={imagen1}
          alt="Primera diapositiva"
        ></img>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "360px", width: "360px" }}
          className="d-block w-100"
          src={imagen2}
          alt="Segunda diapositiva"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "360px", width: "360px" }}
          className="d-block w-100 "
          src={imagen3}
          alt="Tercera diapositiva"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
