import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: 6,
    email: 'manman@abc.com',
    userName: '만만이',
    phoneNumber: '010-3456-7857',
    role: 'ROLE_USER',
    vacationCount: 12,
    position: '사원',
    department: '재무팀',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      const { id, email, userName, phoneNumber, role, vacationCount, position, department } =
        action.payload
      state.user = { id, email, userName, phoneNumber, role, vacationCount, position, department }
    },
  },
})

// const store = configureStore({
//   reducer: {
//     user: userSlice.reducer
//   }
// });

export const { updateUser } = userSlice.actions

export default userSlice.reducer

// export default store;
