import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import dynamic from 'next/dynamic'

let carouselText = [
  "Other than a Tic Tac Toe game, this was my first attempt at making a game using Javascript, CSS and HTML. Deployed and playable, but currently a work in progress. This game is meant to be a challenging platformer that puts emphasis on the player having good timing and knowledge of game mechanics.",
  "The Studio Ghibli Forums is the place for lovers of Studio Ghibli films to select their favorites and share their opinions by creating discussion posts. Currently deployed, but a work in progress.",
  "Reading Buddy is a colabrative project from myself, Emily Krauss, Scott McLeod, and Eliott Davidson, who are all very wonderful people. While currently mostly non-functional, Reading Buddy will be a virtual book catalog where a user can keep track of the books they have read, currently are reading, and help them find new books to read based on what their friends reccomend. Reading Buddy is intended to be a freindly place for discourse and literary exploration.",
  "VR Sandbox Playground is exactly what it's name entails, currently the player can move around the game space and pickup objects and spawn in new ones with the menu above the red platform. As I have time more features will be added, including a grapple gun and obstacle course."
]

const DynamicComponent = dynamic(() => import('../components/carouseltext'))

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("Other than a Tic Tac Toe game, this was my first attempt at making a game using Javascript, CSS and HTML. Deployed and playable, but currently a work in progress. This game is meant to be a challenging platformer that puts emphasis on the player having good timing and knowledge of game mechanics.");

  const textSelect = () => {
    if (index === 3) {
      setText("Other than a Tic Tac Toe game, this was my first attempt at making a game using Javascript, CSS and HTML. Deployed and playable, but currently a work in progress. This game is meant to be a challenging platformer that puts emphasis on the player having good timing and knowledge of game mechanics.")
    } else {
      setText(carouselText[(index + 1)])
    }
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    textSelect();
    console.log(index, "👹")
  };

  return (
    <div className={styles.main}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={styles.galpic}>
          <img
            className="d-block w-80"
            src="/gameplay.png"
            alt="Slide one showing my side-scrolling platformer"
          />
          <Carousel.Caption>
            <div>
              <h2 className={styles.carcap}><a href="https://charleshperry.github.io/P1-Side-Scroller/">My First Game</a></h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.galpic}>
          <img
            className="d-block w-80"
            src="/screenshot2.png"
            alt="Studio Ghibli Forums login page"
          />
          <Carousel.Caption>
            <h2><a href="https://ghiblifilmp2.herokuapp.com/">Studio Ghibli Forums</a></h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
          className="d-block w-80"
          src="/Reading.png"
          alt="Home page of reading buddy"
          />
          <Carousel.Caption>
            <h2><a href="https://mystifying-johnson-1a5de9.netlify.app/">Reading Buddy</a></h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-80"
            src="/Sandbox.png"
            alt="Gameplay of my VR Sandbox game"
          />
          <Carousel.Caption>
            <h2><a href="https://github.com/CharlesHPerry/VR-Sandbox-Playground">VR Sandbox Playground</a></h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <DynamicComponent text={text} />
    </div>
  )
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charles H. Perry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Charles Perry
        </h1>

        <p className={styles.description}>
          Up and Coming Full Stack Dev out of the Seattle Area. Graduate of General Assembly's Software Engineering Immersive Remote class. Below are some of my in progress projects:
        </p>
        <ControlledCarousel />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
