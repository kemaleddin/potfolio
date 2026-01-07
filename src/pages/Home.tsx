import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import '../App.css'

const Home = () => {
    return (
        <div className="app">
            <Hero />
            <Skills />
            <Contact />
        </div>
    )
}

export default Home
