import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sent } from './views/Sent';
import { Trash } from './views/Trash';
import { Inbox } from './views/Inbox';
import { SignIn } from './views/SignIn';
import { Route, Routes } from 'react-router-dom'
import { Unauthorized } from './views/Unauthorized';

export const App = () => {

return (
  <>
    <header>
      <Navbar />
    </header>

    <main className='container mt-4'>
      <Routes>
        {
          !currentUser.loggIn ?
            (
              <>
                <Route exact path='/signin' element={<SignIn />} />
                <Route path='*' element={<Unauthorized />} />
              </>
            ): 
          (
        <>
          <Route exact path='/' element={<Inbox />} />
          <Route exact path='/sent' element={<Sent />} />
          <Route exact path='/trash' element={<Trash />} />
        </>
          )
        }
      </Routes>
    </main>

    <footer>


    </footer>
  </>
);
};
