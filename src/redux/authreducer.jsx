import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}
if( JSON.parse(localStorage.getItem("user")) != null){
  initialState.user = JSON.parse(localStorage.getItem("user"));
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      setUser: (state, action) => {
        state.user = action.payload
      },
      setLogOut: (state, action) => {
        state.user = null
      },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export default counterSlice.reducer