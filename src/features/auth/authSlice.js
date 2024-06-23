import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token:null,
  user:null,
}
const themeSlice = createSlice({
  name:"auth",
  initialState,
  reducers: {
   setLogout: (state)=>{
    state.token = null;
    state.user = null;
   },
   setLogin:(state,action) =>{
    state.token = action.payload.token;
    state.user = action.payload.user;
   }
  }
})
export const { setLogout,setLogin } = themeSlice.actions;
export default themeSlice.reducer