import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LandingComponent } from './modules/landing';

function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
