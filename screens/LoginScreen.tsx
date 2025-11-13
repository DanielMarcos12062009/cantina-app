import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [senha, setSenha ] = useState('')

  return (
    <View style={styles.container}>
      <Text>Usuário</Text>
      <TextInput placeholder="Digite seu email" 
      onChangeText={(e) => setEmail(e) } ></TextInput>
      <Text>Senha</Text>
      <TextInput placeholder="Informe sua senha" 
      onChangeText={(e) => setSenha(e)}></TextInput>
      <Button title="Confirmar"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});