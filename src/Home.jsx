import { Carousel } from '@mantine/carousel';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import { Paper, Title, Button, createTheme, MantineProvider } from "@mantine/core";
import { Container, Text } from '@mantine/core';
import Header from "./Header";

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const HomeTop = () => {
return (
    <div>
    <Container fluid className="hometop flex flex-col items-center">
      <h1>
        A store that covers your electronics, jewelry, and clothing needs
      </h1>

      <Text className="homepara">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa orci, efficitur euismod tincidunt et, dapibus sit amet neque. Cras quam lacus, maximus sed justo sed, tristique pellentesque sem. Nunc vulputate vitae velit a ornare. Nam et lorem ultricies mi condimentum ornare ut vel mi. Aliquam non bibendum lectus. Pellentesque.
      </Text>
    </Container>
  </div>
);
}

function Card({image, title, path}) {
return (
    <Paper
    shadow="md"
      p="xl"
      radius="md"
      height={1000}
      style={{ backgroundImage: `url(${image})` }}
      className="card overflow-x-hidden" >
        <div className="text-pad flex flex-col justify-center items-center">
        <div>
        <Title order={1} className="carousel-name carousel-title">
          {title}
        </Title>
      </div>
      <div>
      <Link to={path} className="carousel-name">
      <Button>
        Start shopping
      </Button>
      </Link>
      </div>
      </div>
      </Paper>
)
}

const data = [
    {
    image: './src/assets/electronics.jpg',
    title: 'Electronics',
    path: '/shop/electronics',
    },
    {
    image: './src/assets/jewelry.jpg',
    title: 'Jewelry',
    path: '/shop/jewelry',
    },
    {
    image: './src/assets/mens.jpg',
    title: `Men's Clothing`,
    path: '/shop/mens%20clothing'
    },
    {
    image: './src/assets/womens.jpg',
    title: `Women's Clothing`,
    path: '/shop/womens%20clothing',
    },
];

const HomeCarousel = () => {
    const slides = data.map((item) => (
        <div className="embla__slide" key={item.title}>
          <Card {...item} />
        </div>
      ));
      const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

      return (
        <div>
        <div className="embla">
      <div className="embla__viewport flex flex-col-reverse" ref={emblaRef}>
        <div className="embla__container">
          {slides}
        </div>
        <div className="flex justify-center">
        <button className="embla__prev" onClick={scrollPrev}>Previous</button>
        <button className="embla__next" onClick={scrollNext}>Next</button>
        </div>
      </div>
    </div>
        </div>
      );
}

const Home = () => {
return (<div><MantineProvider theme={theme}>
    <Header></Header>
    <HomeTop></HomeTop>
    <HomeCarousel></HomeCarousel>
    </MantineProvider>
    </div>)
}

export default Home;