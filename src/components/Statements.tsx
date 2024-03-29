import styled from "styled-components";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

import useMediaQuery from "@mui/material/useMediaQuery";
import { RevealWrapper } from "next-reveal";

const Statements = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <RevealWrapper delay={600}>
      <Section id={"depoimentos"}>
        <h2>O que é Dr.Ney?</h2>
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
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-do-socorro.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria do socorro</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
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
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="img-wrapper">
                  <Image
                    sizes="100px"
                    src="/images/maria-das-dores.jpg"
                    alt="Ney Simões"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="baloon">
                  <h1>Maria das dores</h1>
                  <a>Dr. Ney é saúde e qualidade de vida.</a>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </Section>
    </RevealWrapper>
  );
};
const Section = styled.section`
  z-index: 0;
  color: ${({ theme }) => theme.color.secundary.main};
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
        ${({ theme }) => theme.color.primary.main} 0%,
        #0000 20%,
        #0000 80%,
        ${({ theme }) => theme.color.primary.main} 100%
      );
    }
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
  color: ${({ theme }) => theme.color.primary.main};
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
    color: ${({ theme }) => theme.color.primary.main};
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    z-index: 2;
    /* background-color: ${({ theme }) => theme.color.background}; */
    background: linear-gradient(
      60deg,
      ${({ theme }) => theme.color.secundary.main} 10%,
      ${({ theme }) => theme.color.primary.dark} 170%
    );
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
    width: 350px;
    padding: 1rem;
    border-radius: 1.5rem;
    gap: 0;
    :before {
      content: "";
      position: absolute;
      top: 45px;
      left: -44px;
      z-index: 2;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-right: 30px solid ${({ theme }) => theme.color.secundary.main};
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
    border: 4px solid ${({ theme }) => theme.color.primary.dark};
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default Statements;
