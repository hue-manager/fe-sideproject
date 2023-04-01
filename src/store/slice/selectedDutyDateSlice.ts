import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectedDutyDateState {
  selectedDutyDate: string | null
}

const initialState: SelectedDutyDateState = {
  selectedDutyDate: null,
}

export const selectedDutyDateSlice = createSlice({
  name: 'selectedDutyDate',
  initialState,
  reducers: {
    setSelectedDutyDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDutyDate = action.payload
    },
  },
})

export const { setSelectedDutyDate } = selectedDutyDateSlice.actions

export default selectedDutyDateSlice.reducer
