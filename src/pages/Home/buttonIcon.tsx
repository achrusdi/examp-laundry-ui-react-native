import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IkonBill,
  IkonExpress,
  IkonKarpet,
  IkonKiloan,
  IkonOutcome,
  IkonSatuan,
  IkonSetrika,
  IkonVIP,
} from '../../assets';
import {SECOND_COLOR} from '../../utils/constant';

const ButtonIcon = ({title, type}: {title: any; type: any}) => {
  const Icon = () => {
    if (title === 'Add Saldo') {
      return <IkonBill />;
    }
    if (title === 'Get Point') {
      return <IkonOutcome />;
    }
    if (title === 'Kiloan') {
      return <IkonKiloan />;
    }
    if (title === 'Satuan') {
      return <IkonSatuan />;
    }
    if (title === 'VIP') {
      return <IkonVIP />;
    }
    if (title === 'Karpet') {
      return <IkonKarpet />;
    }
    if (title === 'Setrika Saja') {
      return <IkonSetrika />;
    }
    if (title === 'Ekspress') {
      return <IkonExpress />;
    }
    return <IkonBill />;
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.BGIcon(type)}>
        <Icon />
      </View>
      <Text style={styles.textIcon(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  BGIcon: type => ({
    backgroundColor: SECOND_COLOR,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 5,
  }),
  textIcon: type => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
    backgroundColor: '#fff',
  }),
  container: type => ({
    marginBottom: type === 'layanan' ? 20 : 0,
    marginHorizontal: type === 'layanan' ? 10 : 0,
  }),
});
