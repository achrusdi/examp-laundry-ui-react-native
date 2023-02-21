import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {MAIN_COLOR} from '../../utils/constant';
import ButtonIcon from './buttonIcon';
import Gap from '../../components/Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo :</Text>
          <Text style={styles.valueSaldo}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar Point :</Text>
          <Text style={styles.valuePoint}>100 Point</Text>
        </View>
      </View>
      <View style={styles.saldoButton}>
        <ButtonIcon title="Add Saldo" />
        <Gap width={11} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
    paddingTop: 25,
    paddingBottom: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: -windowsHeight * 0.03,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saldo: {
    width: '60%',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: MAIN_COLOR,
  },
  saldoButton: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: windowsWidth * 0.018,
    justifyContent: 'flex-end',
  },
});
