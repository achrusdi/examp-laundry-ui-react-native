import {StyleSheet, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo, SplashScreen} from '../../assets';

const Splash = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={SplashScreen} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});
