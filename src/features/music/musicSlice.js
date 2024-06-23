import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPlaying: false,
  isLoop:false,
  isShuffle:false,
  currentIndex:0,
  listLength:0,
  lists: [],
}
const musicSlice = createSlice({
  name:"music",
  initialState,
  reducers: {
    setLoop: (state) =>{
      state.isLoop = !state.isLoop
    },
    setLists:(state,actions)=>{
      state.lists = actions.payload;
    },
    setShuffle: (state) =>{
      state.isShuffle = !state.isShuffle;
    },
    setPlay: (state) =>{
      state.isPlaying = !state.isPlaying
    },
    setCurrentIndex:(state,actions) => {
      state.currentIndex = actions.payload
    },
    setNext: (state)=>{
      if(state.isShuffle){
        let newIndex ;
        do {
            newIndex = Math.floor(Math.random()*state.listLength)

        } while (newIndex === state.currentIndex)
        state.currentIndex = newIndex;
      } else if(state.currentIndex < state.listLength-1) {
        state.currentIndex++
      } else {
        state.currentIndex = 0;
      }
    },
    setBack: (state)=>{
      if(state.currentIndex > 1) {
        state.currentIndex--
      } else {
        state.currentIndex = state.listLength - 1;
      }
    },
    setListLength: (state, actions) =>{
      state.listLength = actions.payload;
    }
  }
})
export const { setLoop,setPlay,setShuffle,setCurrentIndex,setBack,setNext,setListLength,setLists } = musicSlice.actions;
export default musicSlice.reducer