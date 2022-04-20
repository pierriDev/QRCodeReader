import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewData } from '../../features/qrcodemanager/QrCodeManager';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const useReadQrCode = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);
    dispatch(addNewData({ text: data }));
  };

  const enableQrCode = () => {
    setScanned(false);
  };

  return {
    enableQrCode,
    hasPermission,
    scanned,
    handleBarCodeScanned,
  };
};
