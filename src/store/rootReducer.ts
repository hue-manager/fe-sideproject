import { combineReducers } from 'redux'
import calendarReducer from './slice/calendarSlice'
import selectedAnnualDateSlice from './slice/selectedAnnualDateSlice'
import selectedDutyDateSlice from './slice/selectedDutyDateSlice'
import confirmModalSlice from './slice/confirmModalSlice'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  selectedDutyDate: selectedDutyDateSlice,
  selectedAnnualDate: selectedAnnualDateSlice,
  isConfirmModal: confirmModalSlice,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer
