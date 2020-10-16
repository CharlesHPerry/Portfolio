import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { gsap, TweenMax, Power3} from 'gsap/index'
import { useIntersection } from 'react-use'


let carouselText = [
  "Other than a Tic Tac Toe game, this was my first attempt at making a game using Javascript, CSS and HTML. Deployed and playable, but currently a work in progress. This game is meant to be a challenging platformer that puts emphasis on the player having good timing and knowledge of game mechanics.",
  "The Studio Ghibli Forums is the place for lovers of Studio Ghibli films to select their favorites and share their opinions by creating discussion posts. Currently deployed, but a work in progress.",
  "Reading Buddy is a colabrative project from myself, Emily Krauss, Scott McLeod, and Eliott Davidson, who are all very wonderful people. Reading Buddy is a virtual book catalog where a user can keep track of the books they have read, currently are reading, and help them find new books to read based on what their friends reccomend. Reading Buddy is intended to be a freindly place for discourse and literary exploration.",
  "VR Sandbox Playground is exactly what it's name entails, currently the player can move around the game space and pickup objects and spawn in new ones with the menu above the red platform. Built in Unity using XR intergration which allows for the use of muliple different devices. As I have time more features will be added, including a grapple gun and obstacle course."
]

const DynamicComponent = dynamic(() => import('../components/carouseltext'))

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("Other than a Tic Tac Toe game, this was my first attempt at making a game using Javascript, CSS and HTML. Deployed and playable, but currently a work in progress. This game is meant to be a challenging platformer that puts emphasis on the player having good timing and knowledge of game mechanics.");
  //The carouseltext component is not being updated properly so I need to do this as a dirty fix.
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
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} pause={'hover'} interval={4000}>
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

  let sectionRef = useRef(null);
  let introName = useRef(null);
  let introText = useRef(null);
  
  useEffect(() => {
    TweenMax.to(
    introName,
    1, {
      y: +20,
      opacity: 1,
    })
    TweenMax.to(
      introText,
      1, {
        y: +20,
        opacity: 1,
        delay: .4,
      }
    )
  }, [])

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const fadeIn = (element) => {
    gsap.to(sectionRef.current, 1, {
      opacity: 1,
      y: +20,
      ease: 'power4.out',
      stagger: {
        amount: .3,
      }
    })
  };

  const fadeOut = (element) => {
    gsap.to(sectionRef.current, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
      stagger: {
        amount: .3,
      }
    })
  };

  intersection && intersection.intersectionRatio < 0.95 ? fadeOut(introName) : fadeIn(introName);

  return (
    <div className={styles.container}>
      <Head>
        <title>Charles H. Perry</title>
        <link rel="icon" href="/hgh2.png" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <main className={styles.main}>
        <div ref={sectionRef}>
          <h1 className={styles.fade_title} ref={el => {introName = el}}>
            Charles Perry
          </h1>

          <p className={styles.fade_description} ref={el => {introText = el}}>
            Up and coming Full Stack Dev out of the Seattle area. Graduate of General Assembly's remote Software Engineering Immersive program. Below are some of my in-progress projects:
          </p>
        </div>
        <ControlledCarousel />
      </main>

      <footer className={styles.footer}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume {' '}
          <img src="/hgh2.png" alt="My Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}