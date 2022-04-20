import { createSlice } from '@reduxjs/toolkit';
import type { ActionType } from './QRcodeManager.types';

export const qrCodeSlice = createSlice({
  name: 'qrCode',
  initialState: {
    data: [],
  },
  reducers: {
    addNewData: (state: any, action: ActionType) => {
      state.data = [action.payload, ...state.data];
    },
  },
});

export const { addNewData } = qrCodeSlice.actions;

export default qrCodeSlice.reducer;
