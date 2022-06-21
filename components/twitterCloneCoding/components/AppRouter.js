import React, { useState } from 'react';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import {Auth, EditProfile, Home, Profile} from '../routes';

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <BrowserRouter>
      <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Auth />} />
            </>
          )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;