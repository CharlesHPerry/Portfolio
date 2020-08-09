import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charles H. Perry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        <h1 className={styles.title}>
          Charles Perry
        </h1>

        <p className={styles.description}>
          Up and Coming Full Stack Dev out of the Seattle Area. Soon to be graduate of General Assembly's Software Engineering Immersive Remote class. Below are some of my in progress projects:
        </p>

        <div className={styles.grid}>
          <a href="https://charleshperry.github.io/P1-Side-Scroller/" className={styles.card}>
            <h3>My First Game &rarr;</h3>
            <p>Other than a Tic Tac Toe game, this was my first attempt at making a game using Javascript, CSS and HTML,deployed and playable, but currently a work in progress. This game is meant to be a challenging platformer that puts emphasis on the player having good timing and knowledge of game mechanics.</p>
          </a>

          <a href="https://ghiblifilmp2.herokuapp.com/" className={styles.card}>
            <h3>Studio Ghibli Forum &rarr;</h3>
            <p>The Studio Ghibli Forums is the place for lovers of Studio Ghibli films to select their favorites and share their opinions by creating discussion posts. Currently deployed, but a work in progress.</p>
          </a>

          <a
            href="https://mystifying-johnson-1a5de9.netlify.app/"
            className={styles.card}
          >
            <h3>Reading Buddy &rarr;</h3>
            <p>Reading Buddy is a colabrative project from myself, Emily Krauss, Scott McLeod, and Eliott Davidson, who are all very wonderful people. While currently mostly non-functional, Reading Buddy will be a virtual book catalog where a user can keep track of the books they have read, currently are reading, and help them find new books to read based on what their friends reccomend. Reading Buddy is intended to be a freindly place for discourse and literary exploration.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Coming Soon! &rarr;</h3>
            <p>
              I will soon be creating a new project with a new set of technologies, stay tooned!
            </p>
          </a>
        </div>
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
