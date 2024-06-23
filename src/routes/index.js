import config from './config';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login.jsx';
import About from '../pages/About';
import Register from '../pages/Auth/Register.jsx';
import { AnotherLayout } from '../layouts';
import Projects from '../pages/Projects';
import Articles from '../pages/Articles';
import Playlist from '../pages/Playlist';
import Spotify from '../pages/Spotify';
import TermsPrivacy from '../pages/TermsPrivacy';
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.login,
    component: Login,
  },
  {
    path: config.routes.register,
    component: Register,
  },
  {
    path: config.routes.termsprivacy,
    component: TermsPrivacy,
  },
  {
    path: config.routes.about,
    component: About,
  },
  {
    path: config.routes.artwork,
    component: Articles,
  },
  {
    path: config.routes.projects,
    component: Projects,
  },
  {
    path: config.routes.playlist,
    component: Playlist,
    layout: AnotherLayout,
  },
  {
    path: config.routes.spotify,
    component: Spotify,
    layout: AnotherLayout,
  },

];

const privateRoutes = [];

export { privateRoutes, publicRoutes };