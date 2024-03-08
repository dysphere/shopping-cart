import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Paper, Title, Button } from "@mantine/core";
import { Container, Text } from '@mantine/core';
import Header from "./Header";


const HomeTop = () => {
return (
    <div>
    <Container fluid className="hometop flex flex-col items-center pb-10">
      <h1 className="font-bold">
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
        <Title order={1} className="carousel-name carousel-title w-3 drop-shadow-[30px_35px_35px_rgba(0,0,0,1)]">
          {title}
        </Title>
      </div>
      <div>
      <Link to={path} className="carousel-name flex justify-center">
        Start shopping
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
        <Carousel.Slide key={item.title}>
          <Card {...item} />
        </Carousel.Slide>
      ));

      const autoplay = useRef(Autoplay({ delay: 4000 }));

      return (
        <div>
        <Carousel
        withIndicators
      slideSize='100%'
      align="start"
      slidesToScroll={1}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: { backgroundColor: 'white', border: '2px solid white' },
        control: {backgroundColor: 'white'},
      }}>
      {slides}
    </Carousel>
        </div>
      );
}

const Home = () => {

return (<div>
    <Header></Header>
    <HomeTop></HomeTop>
    <HomeCarousel></HomeCarousel>
    </div>)
}

export default Home;