import './App.css'
import './style/main.css'
import './style/footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/home';
import Casestudy from './pages/missucase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/case.css';
import './style/contact.css';
import Login from './pages/login';
import './style/login.css';
import './style/gallery.css';
import GalleryPage from './pages/gallerypage';
import Astirmind from './pages/astirmind';
import CFCpage from './pages/cfc page';
import ResetPassword from './pages/Reset';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missucase" element={<Casestudy />} />
          <Route path="/astirmind" element={<Astirmind />} />
          <Route path="/cfc" element={<CFCpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<GalleryPage /> } />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
