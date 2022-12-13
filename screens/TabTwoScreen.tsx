import { StyleSheet } from 'react-native';

import React, { useState, useEffect } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import {
  ErrorCode,
  HMSAvailability,
} from '@hmscore/react-native-hms-availability';
 //For MapTypes when are you going to update the package Typo from MapType to MapTypes on the Docs.
import HMSMap, { MapTypes } from '@hmscore/react-native-hms-map'; 

export default function TabTwoScreen() {
  const [isHauweiDevice, setIsHuaweiDevice] = useState<boolean>(false);
  const checkIfHuaweiDevice = async () => {
    const huaweiResults =
    //This is the HMS availability error am getting .
      await HMSAvailability.isHuaweiMobileServicesAvailable();
      setIsHuaweiDevice(huaweiResults === ErrorCode.HMS_CORE_APK_AVAILABLE);
  };

  useEffect(() => {
      checkIfHuaweiDevice();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Huawei Map Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HMSMap
        mapType={MapTypes.NORMAL}
        style={{ height: 400 }}
        camera={{ target: { latitude: 41, longitude: 29 }, zoom: 11 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
