import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Work from './pages/Work'
import LanguageSwitcher from './components/LanguageSwitcher'
import PrintableCV from './components/PrintableCV'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <LanguageSwitcher />
      <PrintableCV />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/timeline/work/:experienceId" element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
