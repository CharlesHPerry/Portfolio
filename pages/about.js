import Navbar from '../components/navbar'

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className={description}>
                <h1>Hi I'm Charles</h1>
                <h3>Aspiring Dev who loves the functional side of the development process.</h3>
                <div>
                    <p>Technologies I've used:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Postgres</li>
                        <li>Mongo</li>
                        <li>Sql</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>TypeScript</li>
                        <li>Express</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}