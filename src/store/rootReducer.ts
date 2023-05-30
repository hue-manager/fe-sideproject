import { combineReducers } from 'redux'
import calendarReducer from './slice/calendarSlice'
import selectedAnnualDateSlice from './slice/selectedAnnualDateSlice'
import selectedDutyDateSlice from './slice/selectedDutyDateSlice'
import authReducer from './slice/authSlice'
import userInfoSlice from './mock-slice/userInfoSlice'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  selectedDutyDate: selectedDutyDateSlice,
  selectedAnnualDate: selectedAnnualDateSlice,
  auth: authReducer,
  // mockup
  userInfo: userInfoSlice,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer
