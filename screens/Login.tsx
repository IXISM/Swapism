import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput, StatusBar } from 'react-native';

const Login: React.FC<{ onSuccess: () => void; onRegister: () => void; onBack: () => void }> = ({ onSuccess, onRegister, onBack }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
        
        {/* Return Arrow (onBack function doesn't work yet) */}
        
        <View style={styles.header}>
            <TouchableOpacity onPress={onBack}> 
                <Text style={styles.returnArrow}>←</Text> 
            </TouchableOpacity>
        </View>

        {/* Illustration Section */}
        <View style={styles.illustrationSection}>
            {/* Logo */}
            <Image 
                source={require('../assets/opaqueLogo.png')} 
                style={styles.opaqueLogo}
                resizeMode="contain"
            />
            
            {/* Welcome Back */}
             <Text style={styles.welcomeBack}>Welcome Back</Text>

             {/* Illustration */}
            <Image 
                source={require('../assets/loginIllustration.png')} 
                style={styles.illustration}
                resizeMode="contain"
            />
        </View>


        {/* Form Section */}
        <View style={styles.formSection}>
            
            {/* Email Input */}
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address" // Use email keyboard
                    autoCapitalize="none" // No auto-capitalization for email
                />
            </View>

            {/* Password Input */}
             <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry // Hide password input
                />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={onSuccess}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Links */}
            <View style={styles.linkContainer}>
                {/* Forgot Password Link */}
                <TouchableOpacity>
                    <Text style={styles.linkText}>Forgot Password</Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <TouchableOpacity onPress={onRegister}>
                    <Text style={styles.linkText}>Sign up</Text>
                </TouchableOpacity>
            </View>


        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F3E4', // Cream background color from Figma
  },

  
  // Header
  header: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },

  // Return Arrow
  returnArrow: {
      fontSize: 30,
      color: '#1A1A1A',
  },

  // Illustration Section
  illustrationSection: {
      alignItems: 'center',
      width: '100%',
  },
  opaqueLogo: {
      width: 200,
      height: 200,
      marginTop: -90,
      marginBottom: -10,
  },
  welcomeBack: {
      fontSize: 32,
      fontFamily: 'serif',
      fontWeight: '500',
      color: '#1A1A1A',
      zIndex: 10,
      // Shadow for text
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
  },
  illustration: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      marginTop: -15,
  },

  // Form Section
  formSection: {
      width: '100%',
      paddingHorizontal: 30,
      alignItems: 'center',
  },
  inputContainer: {
      width: '100%',
      backgroundColor: '#F5F3E4',
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#9ABEAA', 
      marginBottom: 15,
      height: 50,

      // Shadow for input field
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 }, // For IOS shadow
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2, // For Android shadow
  },
  input: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 20,
      fontSize: 16,
      fontFamily: 'serif',
      color: '#1A1A1A',
  },

  // Login Button
  loginButton: {
    backgroundColor: '#8FA892', // Muted Sage Green button color
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    // Button Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: '500',
  },

  // Links
  linkContainer: {
      alignItems: 'center',
      marginBottom: 20,
  },
  linkText: {
      color: '#E57373',
      fontSize: 14,
      fontFamily: 'serif',
      marginBottom: 5,
      textDecorationLine: 'underline',
  },
});

export default Login;