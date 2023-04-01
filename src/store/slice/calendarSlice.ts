import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../main'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    date: {
      title: '',
      data: '',
    },
  },
  reducers: {
    setTitle: (state, action) => {
      state.date.title = action.payload
    },
    setData: (state, action) => {
      state.date.data = action.payload
    },
  },
})

export const { setTitle, setData } = calendarSlice.actions

export const selectCalendar = (state: RootState) => state.calendar.date

export default calendarSlice.reducer
