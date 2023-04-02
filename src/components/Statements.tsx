import styled from "styled-components";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

import useMediaQuery from "@mui/material/useMediaQuery";

const Statements = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Section>
      <h2>Depoimentos</h2>
      <div className="swipper-wrapper-div">
        <Swiper
          slidesPerView={2}
          spaceBetween={isNonMobile ? 100 : 10}
          loop={true}
          autoplay={{ delay: 200 }}
          speed={7000}
          //   centeredSlides
          freeMode
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swipper-wrapper-div">
        <Swiper
          slidesPerView={2}
          spaceBetween={isNonMobile ? 100 : 10}
          loop={true}
          autoplay={{ delay: 0 }}
          speed={7000}
          centeredSlides
          freeMode
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="img-wrapper">
                <Image
                  sizes="100px"
                  src="/images/foto-ney2.jpg"
                  alt="Ney Simões"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="baloon">
                <h1>Maria das dores</h1>
                <a>
                  Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada
                  com minha saúde, mas ele foi muito atencioso e me fez sentir à
                  vontade durante todo o atendimento.
                </a>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};
const Section = styled.section`
  background-color: #506e62;
  z-index: 0;
  color: #c9c6a5;
  width: 100vw;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  /* div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  } */
  .swipper-wrapper-div {
    width: 1000px;
  }
  .swiper {
    height: 100%;
    ::after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        #506e62 0%,
        #0000 20%,
        #0000 80%,
        #506e62 100%
      );
    }
  }
  .swiper-container {
    color: #c9c6a5;
  }
  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide-active {
  }
`;

const Card = styled.div`
  display: flex;
  color: #506e62;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 470px;
  div {
    width: 50%;
  }
  a {
    font-size: 0.8rem;
    font-weight: 600;
  }
  h1 {
    font-size: 1rem;
  }
  .baloon {
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    /* background-color: #c9c6a5; */
    background: linear-gradient(
      140deg,
      rgba(201, 198, 165, 1) 0%,
      rgba(201, 198, 165, 0.5) 120%
    );
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
    width: 350px;
    padding: 1rem;
    border-radius: 1.5rem;
    gap: 0;
    :before {
      content: "";
      position: absolute;
      top: 62px;
      left: -59px;
      z-index: 1;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-right: 30px solid #b4b193;
      border-left: 30px solid transparent;
    }
  }
  .img-wrapper {
    position: relative;
    border-radius: 20rem;
    overflow: hidden;
    width: 100px;
    height: 100px;
    padding: 0;
    border: 4px solid #1b2421;
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default Statements;
