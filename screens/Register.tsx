import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, 
  TextInput, StatusBar, Platform, ScrollView, Alert, KeyboardAvoidingView 
} from 'react-native';

{/* Import Firebase services */}
import { auth, db } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const Register: React.FC<{ onSuccess: () => void; onLogin: () => void; onBack: () => void }> = ({ onSuccess, onLogin, onBack }) => {
  
  // 2. State for User Inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for Checkbox & Loading
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  // 3. Handle Registration Logic
  const handleRegister = async () => {
    // Basic Validation
    if(!email || !password || !username) {
        Alert.alert("Error", "Please fill in all fields");
        return;
    }

    if(!isChecked) {
        Alert.alert("Error", "Please accept the Terms & Conditions");
        return;
    }

    setLoading(true);

    try {
        // A. Create User in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // B. Save Username to Realtime Database
        await set(ref(db, 'users/' + user.uid), {
            username: username,
            email: email,
            createdAt: new Date().toISOString()
        });

        Alert.alert("Success", "Account created successfully!");
        onSuccess(); // Go to next screen

    } catch (error: any) {
        // Handle specific Firebase errors (optional)
        let errorMessage = error.message;
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = "That email address is already in use!";
        }
        Alert.alert("Registration Failed", errorMessage);
    } finally {
        setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      
      {/* 4. KeyboardAvoidingView to prevent keyboard covering input */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

            {/* Return Arrow */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}> 
                    <Text style={styles.returnArrow}>←</Text> 
                </TouchableOpacity>
            </View>

            {/* Illustration Section */}
            <View style={styles.illustrationSection}>
                <Image 
                    source={require('../assets/opaqueLogo.png')} 
                    style={styles.opaqueLogo}
                    resizeMode="contain"
                />
                <Text style={styles.titleText}>Join Swapism</Text>
                <Text style={styles.subTitleText}>Try clothes on virtually</Text>
                <Image 
                    source={require('../assets/registerIllustration.png')}
                    style={styles.illustration}
                    resizeMode="contain"
                />
            </View>

            {/* Form Section */}
            <View style={styles.formSection}>
                
                {/* Username Input */}
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#9CA3AF"
                        autoCapitalize="none"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry 
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* 5. Interactive T&C Checkbox */}
                <TouchableOpacity 
                    style={styles.termsContainer} 
                    onPress={() => setIsChecked(!isChecked)}
                    activeOpacity={0.8}
                >
                    <View style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}>
                        {isChecked && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.termsText}>
                         I accept the <Text style={styles.termsLink}>T&C</Text>
                    </Text>
                </TouchableOpacity>

                {/* Create Account Button */}
                <TouchableOpacity 
                    style={[styles.createAccountButton, loading && { opacity: 0.7 }]} 
                    onPress={handleRegister}
                    disabled={loading}
                >
                    <Text style={styles.createAccountText}>
                        {loading ? "Creating..." : "Create Account"}
                    </Text>
                </TouchableOpacity>

                {/* Already have account Link */}
                <TouchableOpacity onPress={onLogin} style={styles.loginLinkContainer}>
                    <Text style={styles.secondaryText}>
                        Already have an account? <Text style={styles.loginLinkText}>Log in</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F3E4', // Cream background
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },

  // Header
  header: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    marginTop: 10,
  },
  returnArrow: {
      fontSize: 30,
      color: '#1A1A1A',
  },

  // Illustration Section
  illustrationSection: {
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
  },
  opaqueLogo: {
      width: 200,
      height: 200,
      marginTop: -90,
  },
  titleText: {
      fontSize: 40,
      fontFamily: 'serif',
      marginTop: -30,
      fontWeight: '500',
      color: '#1A1A1A',
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 3,
  },
  subTitleText: {
      fontSize: 14,
      fontFamily: 'serif',
      color: '#9ABEAA',
  },
  illustration: {
      width: '100%',
      height: 220, 
      marginBottom: 20,
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
      // Shadow
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
  },
  input: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 20,
      fontSize: 16,
      fontFamily: 'serif',
      color: '#1A1A1A',
  },

  // T&C Checkbox Styles
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9ABEAA',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#9ABEAA',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 14,
    color: '#1A1A1A',
    fontFamily: 'serif',
  },
  termsLink: {
    color: '#E57373',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },

  // Create Account Button
  createAccountButton: {
    backgroundColor: '#8FA892', 
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1.0,
    shadowRadius: 3,
    elevation: 5,
  },
  createAccountText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: '500',
  },

  // Login Link
  loginLinkContainer: {
      marginBottom: 25,
  },
  secondaryText: {
      color: '#E57373', 
      fontSize: 14,
      fontFamily: 'serif',
  },
  loginLinkText: {
      textDecorationLine: 'underline',
      fontWeight: 'bold',
  },
});

export default Register;