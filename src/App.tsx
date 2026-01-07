import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Work from './pages/Work'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
