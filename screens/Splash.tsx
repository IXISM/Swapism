import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';

const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Logo */}
      <Image 
        source={require('../assets/opaqueLogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: { 
    width: 350,
    height: 350, 
  },
});

export default Splash;