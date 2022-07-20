import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LandingContainer } from './modules/landing';

function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;