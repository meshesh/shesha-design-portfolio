import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { SnackbarProvider } from '@/components/Snackbar';
import { Home } from '@/pages/Home';
import { WorkList } from '@/pages/WorkList';
import { WorkDetail } from '@/pages/WorkDetail';
import { Life } from '@/pages/Life';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <ScrollToTop />
        <CustomCursor />
        <div className="flex min-h-screen flex-col bg-bg">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<WorkList />} />
              <Route path="/work/:slug" element={<WorkDetail />} />
              <Route path="/life" element={<Life />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
