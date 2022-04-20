import { configureStore } from '@reduxjs/toolkit';
import qrCodeReducer from '../features/qrcodemanager/QrCodeManager';

export default configureStore({
  reducer: {
    QrCode: qrCodeReducer,
  },
});
