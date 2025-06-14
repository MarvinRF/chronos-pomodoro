import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import NotFound from '../../pages/NotFound';
import { Home } from '../../pages/Home';
import { useEffect } from 'react';

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPomodoro />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
}
