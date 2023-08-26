import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { RevealWrapper } from "next-reveal";

const Specialties = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const imageSize = 150;
  const sliderOptions = {
    slidesPerView: 3,
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
  };
  const [isPink, setIsPink] = useState("");

  const link = "https://api.whatsapp.com/send?phone=558287290045&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Ney%20a%20respeito%20de%20";

  const specialties = [
    {
      title: "Medicina Fetal",
      image: `/images/slider/feto${isPink}.png`,
    },
    {
      title: "Ginecologia regenerativa",
      image: `/images/slider/parto${isPink}.png`,
    },
    {
      title: "Implante Hormonal",
      image: `/images/slider/implant${isPink}.png`,
    },
    {
      title: "Exames de Ultrassom",
      image: `/images/slider/ultrassom${isPink}.png`,
    },
    {
      title: "Estética íntima",
      image: `/images/slider/utero${isPink}.png`,
    },
  ];

  useEffect(() => {
    setIsPink(window.location.pathname.includes("fraxx") ? "-pink" : "");
  }, []);

  return (
    <RevealWrapper delay={600}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Section id={"especialidades"} isNonMobile={isNonMobile}>
          <div className="text">
            <h1>Especialidades</h1>
            <a>
              Ginecologista especializado em trazer a qualidade de vida,
              disposição e a fertilidade necessária para realizar seus sonhos
              com a qualidade que você merece.
            </a>
          </div>
          <Swiper modules={[EffectCoverflow, Autoplay]} {...sliderOptions}>
            {specialties.map((specialty, index) => (
              <SwiperSlide key={index}>
                <Card
                  onClick={() =>
                    window.open(
                      link + specialty.title.split(" ").join("%20"),
                      "blank"
                    )
                  }
                >
                  <Image
                    src={specialty.image}
                    alt="Ney Simões"
                    width={imageSize}
                    height={imageSize}
                  />
                  <h3>{specialty.title}</h3>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>
    </RevealWrapper>
  );
};

const Section = styled.section<{ isNonMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isNonMobile }) => (isNonMobile ? "row" : "column")};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.primary.dark};
  padding: 2rem;
  gap: 2rem;
  max-width: 1100px;
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
    width: ${({ isNonMobile }) => (isNonMobile ? "40%" : "90vw")};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  color: ${({ theme }) => theme.color.primary.main};
  background-color: ${({ theme }) => theme.color.secundary.main};
  height: 280px;
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
