import React from 'react'
import { Navbar } from './components/Navbar';
import { Sent } from './views/Sent';
import { Trash } from './views/Trash';
import { Inbox } from './views/Inbox';
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
              <Route exact path='/' element={ <Inbox />} />
              <Route exact path='/sent' element={ <Sent />} />
              <Route exact path='/trash' element={ <Trash />} />
            </Routes>
          </main>

          <footer>


          </footer>
        </>
    )
}

