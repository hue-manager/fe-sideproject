import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserInfo } from '../../api/firebase'

interface IUserState {
  user: IUserInfo | null
}

const initialState: IUserState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserInfo | null>) => {
      state.user = action.payload
    },
    clearUser: (state, action) => {
      state.user = null
    },
  },
})

export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer
