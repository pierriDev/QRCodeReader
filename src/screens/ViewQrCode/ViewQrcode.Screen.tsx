import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useViewQrCode } from './useViewQrCode';
import styles from './ViewQrCode.styles';
import type { itemProps } from './ViewQrCode.types';

const ViewQrCodeScrren = () => {
  const { isRefreshing, qrCodeData } = useViewQrCode();
  const renderItem = ({ item, index }: itemProps) => {
    return (
      <View style={styles.dataBox} key={index}>
        <Text style={styles.dataTitle}>{item.text}</Text>
      </View>
    );
  };
  return (
      <View style={styles.container}>
        {qrCodeData.length ? (
          <FlatList
            data={qrCodeData}
            renderItem={renderItem}
            refreshing={isRefreshing}
            extraData={qrCodeData}
            removeClippedSubviews={true}
            style={styles.dataContainer}
          />
        ) : (
          <>
            <Text style={styles.noDataTitle}>No Data Returned</Text>
            <Text style={styles.noDataSubTitle}>
              Scan a Qr Code to get data
            </Text>
          </>
        )}
      </View>
  );
};

export default ViewQrCodeScrren;
