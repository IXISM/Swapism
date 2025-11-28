import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme';

const Login: React.FC<{ onSuccess: () => void; onRegister: () => void }> = ({ onSuccess, onRegister }) => {
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>Sign In</Text>
      <TouchableOpacity style={styles.primary} onPress={onSuccess}>
        <Text style={styles.primaryText}>Sign In (placeholder)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tertiary} onPress={onRegister}>
        <Text style={styles.tertiaryText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 24 },
  primary: { backgroundColor: colors.primary, paddingVertical: 12, paddingHorizontal: 28, borderRadius: 10 },
  primaryText: { color: colors.surface, fontWeight: '700' },
  tertiary: { marginTop: 12 },
  tertiaryText: { color: colors.text, textDecorationLine: 'underline' },
});

export default Login;
