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
    <Section>
      <div className="text">
        <h1>Especialidades</h1>
        <a>
          Ginecologista e Obstetra, especializado em endometriose e pós graduado
          em endoscopia ginecológica e cirurgia minimamente invasiva.
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
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background-color: #506e62;
  color: #c9c6a5;
  width: 100%;
  padding: 2rem 0;
  p {
  }
  .swiper-container {
    width: 50%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    /* background-color: red; */
    /* width: 100px; */
    transform: scale(0.9);
    transition: transform 0.9s;
    will-change: transform;
  }
  .swiper-slide-active {
    transform: scale(1);
    /* background-color: blue; */
    /* width: 300px; */
  }
  .text {
    margin: 0 0 0 8rem;
    width: 800px;
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
  }
`;

export default Specialties;
