import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function Title() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = 'Serizawa | ' + pathname.slice(1);
  }, [pathname]);

  return null;
}

function App() {
  const { theme } = useSelector(theme=>{
    return theme.theme
  })
  document.documentElement.setAttribute("data-theme", theme);
  return (
    <Router>
      <div className="App">
      <ScrollToTop />
      <Title />
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <AnimatePresence mode='wait' initial={false}>
                    <Layout>
                        <Page />
                    </Layout>
                  </AnimatePresence>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;