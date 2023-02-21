import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import ButtonIcon from './buttonIcon';

const Layanan = () => {
  return (
    <View>
      <Text style={styles.labelLayanan}>Layanan Kami</Text>
      <View style={styles.buttonLayanan}>
        <View style={styles.buttonLayananWrap}>
          <ButtonIcon type={'layanan'} title="Kiloan" />
          <ButtonIcon type={'layanan'} title="Satuan" />
          <ButtonIcon type={'layanan'} title="VIP" />
        </View>
        <View style={styles.buttonLayananWrap}>
          <ButtonIcon type={'layanan'} title="Karpet" />
          <ButtonIcon type={'layanan'} title="Setrika Saja" />
          <ButtonIcon type={'layanan'} title="Ekspress" />
        </View>
      </View>
    </View>
  );
};

export default Layanan;

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  labelLayanan: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginBottom: 20,
  },
  buttonLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  buttonLayananWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowsWidth * 0.85,
  },
});
