import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../src/main'

interface ConfirmModalData {
  isConfirmModal: boolean
}

const initialState: ConfirmModalData = {
  isConfirmModal: false,
}

const confirmModalSlice = createSlice({
  name: 'isConfirmModal',
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isConfirmModal = true
    },
    modalClose: (state) => {
      state.isConfirmModal = false
    },
  },
})

export const { modalOpen, modalClose } = confirmModalSlice.actions

export const selectConfirmModal = (state: RootState) => state.isConfirmModal

export default confirmModalSlice.reducer
