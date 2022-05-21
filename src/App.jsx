import React from 'react'
import { Navbar } from './components/Navbar';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'


export const App = () => {
  return (
        <>
          <header>
            <Navbar />
          </header>

          <main className='container mt-4'>
            <Routes>
              <Route exact path='/' element={ <Home />} />
              <Route exact path='/contact' element={ <Contact />} />
              <Route exact path='/about' element={ <About />} />
            </Routes>
          </main>

          <footer>


          </footer>
        </>
    )
}

