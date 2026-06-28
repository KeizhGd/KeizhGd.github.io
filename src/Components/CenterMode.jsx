import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode({ items = [] }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: items.length > 1,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div className="slider-container  ">
      <Slider {...settings}>
        {items.map((proyecto, index) => (
          <div
            className=" py-4 m-0 align-items-center justify-content-center "
            key={index}
          >
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="bg-dark p-0 m-0"
                style={{
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                }}
              >
                <img
                  className="img-fluid mx-auto rounded"
                  src={`${process.env.PUBLIC_URL}/${proyecto.image}`}
                  alt={proyecto.nombre}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </div>
            </div>

            <h4 className="mt-4">{proyecto.nombre}</h4>

            <p>
              <strong>{proyecto.tecnologias}</strong>
            </p>

            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;