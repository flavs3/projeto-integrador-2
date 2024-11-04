import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SideNavigation = ({}) => {
  const navigation = useNavigation();
  const entrarTelaHome = () => {
    navigation.navigate("TelaHome"); // Navega para a tela de pedido
  };

  const entrarTelaVisualizacao = () => {
    navigation.navigate("TelaVisualizacao"); // Navega para a tela de pedido
  };

  const entrarTelaMedicamento = () => {
    navigation.navigate("TelaMedicamento"); // Navega para a tela de pedido
  };
  const entrarTelaAtribuicao = () => {
    navigation.navigate("TelaAtribuicao");
  };

  const entrarTelaCadastro = () => {
    navigation.navigate("TelaCadastro");
  };





 return (
    <View style={styles.container}>
      <Pressable onPress={entrarTelaHome} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
      <Pressable onPress={entrarTelaVisualizacao} style={styles.button}>
        <Text style={styles.buttonText}>Visualização</Text>
      </Pressable>
      <Pressable onPress={entrarTelaCadastro} style={styles.button}>
        <Text style={styles.buttonText}>Cadastro de Pets</Text>
      </Pressable>
      <Pressable onPress={entrarTelaMedicamento} style={styles.button}>
        <Text style={styles.buttonText}>Cadastro de Remédios </Text>
      </Pressable>
      <Pressable onPress={entrarTelaAtribuicao} style={styles.button}>
        <Text style={styles.buttonText}>Atribuição</Text>
      </Pressable>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#0047AB",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SideNavigation;
