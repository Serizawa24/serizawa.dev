import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice.js';
import authReducer from '../features/auth/authSlice.js';
import musicSlice from '../features/music/musicSlice.js';
import spotifySlice from '../features/spotify/spotifySlice.js';
export const store = configureStore({
  reducer:{
    theme:themeReducer,
    auth:authReducer,
    music:musicSlice,
    spotify:spotifySlice,
  },
})
