import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../App.css'

const Home = () => {
    return (
        <div className="app">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
