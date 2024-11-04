// src/screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      {/* Email Input */}
      <TextInput placeholder="Correo electronico" style={styles.input} />

      {/* Password Input */}
      <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>o</Text>
        <View style={styles.line} />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Numero Telefono</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Gmail</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ff4d4d',
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#cccccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#aaaaaa',
  },
  socialButton: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  socialButtonText: {
    color: '#555555',
    fontSize: 16,
  },
  registerText: {
    color: '#555555',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
