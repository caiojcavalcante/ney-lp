import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

const Specialties = () => {
  const imageSize = 150;
  const sliderOptions = {
    slidesPerView: 3,
    pagination: true,
    navigation: true,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    speed: 700,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    // Uncomment autoply option then you can see the swiper play automatically
    // you can override setting options pass settings props to this component
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#506e62",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Section>
        <div className="text">
          <h1>Especialidades</h1>
          <a>
            Ginecologista e Obstetra, especializado em endometriose e pós
            graduado em endoscopia ginecológica e cirurgia minimamente invasiva.
          </a>
        </div>
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          {...sliderOptions}
        >
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/feto.png"
                alt="Ney Simões"
                width={imageSize}
                height={imageSize}
              />
              <h3>Medicina Fetal</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/parto.png"
                alt="Ney Simões"
                width={imageSize}
                height={imageSize}
              />
              <h3>Acompanhamento e Cirurgia de Parto</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/ultrassom.png"
                alt="parto"
                width={imageSize}
                height={imageSize}
              />
              <h3>Exames de Ultrassom</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/utero.png"
                alt="Ney Simões"
                width={imageSize}
                height={imageSize}
              />
              <h3>Saúde Ginecologica</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/feto.png"
                alt="Ney Simões"
                width={imageSize}
                height={imageSize}
              />
              <h3>Medicina Fetal</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/parto.png"
                alt="Ney Simões"
                width={imageSize}
                height={imageSize}
              />
              <h3>Acompanhamento e Cirurgia de Parto</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/ultrassom.png"
                alt="parto"
                width={imageSize}
                height={imageSize}
              />
              <h3>Exames de Ultrassom</h3>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image
                src="/images/slider/utero.png"
                alt="Ney Simões"
                width={imageSize}
                height={imageSize}
              />
              <h3>Saúde Ginecologica</h3>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Section>
    </div>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #506e62;
  color: #c9c6a5;
  padding: 2rem 0;
  max-width: 1000px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  div {
    max-width: 700px;
  }
  .swiper-container {
    margin: 0;
    position: relative;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    transform: scale(0.9);
    transition: transform 0.9s;
    will-change: transform;
  }
  .swiper-slide-active {
    transform: scale(1);
  }
  .text {
    width: 400px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  color: #506e62;
  background-color: #c9c6a5;
  height: 300px;
  width: 250px;
  border-radius: 2rem;
  padding: 2rem 0 2rem 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  h3 {
    width: 80%;
    font-size: 1.1rem;
  }
`;

export default Specialties;
