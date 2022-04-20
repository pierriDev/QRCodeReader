import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useReadQrCode } from './useReadQrCode';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './ReadQrCode.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ReadQrCodeScreen = () => {
  const { enableQrCode, hasPermission, scanned, handleBarCodeScanned } =
    useReadQrCode();
  return (
    <>
      <View style={styles.container}>
        {hasPermission && !scanned && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            key={'BarCodeScanner'}
          />
        )}
        {scanned && (
          <View style={styles.sucessBox}>
            <MaterialCommunityIcons
              name={'check-circle'}
              size={180}
              color={'#0F0'}
            />
            <Text style={styles.successTitle}>QRCode scanned with Sucess</Text>
            <TouchableOpacity
              style={styles.successButton}
              onPress={() => enableQrCode()}
            >
              <Text style={styles.successButtonText}>Press to scan again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default ReadQrCodeScreen;
