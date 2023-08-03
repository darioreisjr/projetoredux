import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  user: null
  // {
  //   id: 1,
  //   name:'scott',
  //   email: 'scott@teste.com',
  //   adress: null,
  // }
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{

  }
})

export default userSlice.reducer