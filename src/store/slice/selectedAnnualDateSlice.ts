import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectedAnnualDateState {
  startDate: string | null
  endDate: string | null
}

const initialState: SelectedAnnualDateState = {
  startDate: null,
  endDate: null,
}

const selectedAnnualDateSlice = createSlice({
  name: 'selectedAnnualDate',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<string | null>) => {
      state.startDate = action.payload
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload
    },
  },
})

export const { setStartDate, setEndDate } = selectedAnnualDateSlice.actions

export default selectedAnnualDateSlice.reducer
