import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ImageHeader, Logo} from '../../assets';
import Saldo from './saldo';
import Layanan from './layanan';
import PesananAktif from './pesananAktif';
import {BACKGROUND_PESANAN_AKTIF} from '../../utils/constant';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.headerText}>
            <Text style={styles.mainTextHeader}>Selamat Datang, </Text>
            <Text style={styles.secondTextHeader}>Aqyqo</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layananView}>
          <Layanan />
        </View>
        <View style={styles.pesananAktifView}>
          <Text style={styles.labelPesanan}>Pesanan Aktif</Text>
          <PesananAktif status={'Sudah selesai'} />
          <PesananAktif status={'Masih dicuci'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: windowsWidth,
    height: windowsHeight * 0.25,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowsWidth * 0.3,
    height: windowsHeight * 0.06,
  },
  headerText: {
    marginTop: windowsHeight * 0.025,
  },
  mainTextHeader: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  secondTextHeader: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layananView: {
    paddingHorizontal: 30,
    marginTop: 24,
  },
  pesananAktifView: {
    paddingHorizontal: 30,
    backgroundColor: BACKGROUND_PESANAN_AKTIF,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  labelPesanan: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginTop: 15,
    marginBottom: 19,
  },
});
