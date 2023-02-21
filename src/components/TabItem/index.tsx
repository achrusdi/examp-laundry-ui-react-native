import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IkonAkun,
  IkonAkunActive,
  IkonHome,
  IkonHomeActive,
  IkonPesanan,
  IkonPesananActive,
} from '../../assets';
import {INACTIVE_COLOR, MAIN_COLOR} from '../../utils/constant';

const TabItem = ({
  isFocused,
  onPress,
  onLongPress,
  label,
}: {
  isFocused: any;
  onPress: any;
  onLongPress: any;
  label: any;
}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IkonHomeActive /> : <IkonHome />;
    }
    if (label === 'Pesanan') {
      return isFocused ? <IkonPesananActive /> : <IkonPesanan />;
    }
    if (label === 'Akun') {
      return isFocused ? <IkonAkunActive /> : <IkonAkun />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused: any) => ({
    fontSize: 13,
    color: isFocused ? MAIN_COLOR : INACTIVE_COLOR,
    marginTop: 8,
  }),
});
