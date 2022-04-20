import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { stateProps } from './ViewQrCode.types';

export const useViewQrCode = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [qrCodeData, setQrCodeData] = useState([]);
  const data = useSelector((state: stateProps) => state.QrCode.data);

  useEffect(() => {
    setQrCodeData(data);
  }),
    [];

  return {
    isRefreshing,
    qrCodeData,
  };
};
