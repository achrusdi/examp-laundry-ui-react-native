import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {IkonPesananAktif} from '../../assets';

const PesananAktif = ({status}: {status: any}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IkonPesananAktif />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Pesanan No. 0002142</Text>
        <Text style={styles.secondText(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: windowsHeight * 0.03,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 11,
  },
  mainText: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  secondText: status => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: status === 'Sudah selesai' ? '#55CB95' : '#FF4D00',
  }),
});
