import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';


const Welcome: React.FC<{ onNavigate: (route: string) => void; onGuest: () => void }> = ({ onNavigate, onGuest }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      
      {/* Main Background*/}
      <SafeAreaView style={styles.mainBackground}>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/transparentLogo.png')}
            style={styles.transparentLogo} 
            resizeMode="contain"
          />
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../assets/welcomeIllustration.png')}
            style={styles.welcomeIllustration} 
            resizeMode="contain" 
          />
        </View>
      </SafeAreaView>

      {/* White Card */}
      <View style={styles.whiteCard}>
        
        {/* Tagline */}
        <Text style={styles.tagline}>Discover, swap, and try clothes virtually</Text>
        
        {/* Welcome Title */}
        <Text style={styles.title}>Welcome!</Text>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => onNavigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => onNavigate('Register')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Skip Link */}
        <TouchableOpacity onPress={onGuest}>
          <Text style={styles.guestText}>Skip for now</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Main Background
  mainContainer: {
    flex: 1,
    backgroundColor: '#C1D9B7',
  },
  mainBackground: {
    flex: 2.0, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  // Logo Styles
  logoContainer: {
    height: 80,
  },
  transparentLogo: {
    width: 200,
    height: 180,
    zIndex: 10, // Ensure it stays above other elements
  },
  // Illustration Styles
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeIllustration: {
    width: 420,
    height: 450,
    objectFit: "contain",
  },
  
  // White Card Styles
  whiteCard: {
    backgroundColor: '#F5F3E4', // Cream/Off-white background
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 14,
    fontFamily: 'serif',
    color: '#666',
    textAlign: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'serif', 
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 40,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 0, height: 2 }, 
    textShadowRadius: 10, // Blur amount
  },
  // Login Button
  loginButton: {
    backgroundColor: '#000000ff', 
    width: '90%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    // Button Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // For IOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, // For Android shadow
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'serif',
    fontWeight: '700',
  },

  // Sign Up Button
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#000000ff',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#1A1A1A',
    fontSize: 16,
    fontFamily: 'serif',
    fontWeight: '700',
  },

  // Guest Link
  guestText: {
    fontFamily: 'serif',
    color: '#E57373',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default Welcome;