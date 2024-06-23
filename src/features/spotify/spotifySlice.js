import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
  tokenType: null,
  expiresIn: null,
};
const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setToken } = spotifySlice.actions;
export default spotifySlice.reducer;
