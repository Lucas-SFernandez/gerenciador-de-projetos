import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'

import Company from './components/pages/Company'

import Contato from './components/pages/Contato'

import NewProjects from './components/pages/NewProjects'

import Projetos from './components/pages/Projetos'

import Container from './components/layout/Container'

import Navbar from './components/layout/Navbar'

import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>
<Navbar />

      <Container customClass="min-height">

      <Routes>

        <Route exact path="/" element={<Home/>}>
        </Route>

        <Route exact path="/projetos" element={<Projetos/>}>
        </Route>

        <Route exact path="/company" element={<Company/>}>
        </Route>

        <Route exact path="/contact" element={<Contato/>}>
        </Route>

        <Route exact path="/newprojects" element={<NewProjects/>}>
        </Route>
        
      </Routes>

      </Container>

      <Footer />
    </Router>
  );
}

export default App;
