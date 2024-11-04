import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import Template from "../components/TemplatePrincipal";
import CustomModal from "../components/CustomModal";
import axios from "axios";

const TelaCadastro = () => {
  const [modalVisible, setModalVisible] = useState("");
  const [nome, setNome] = useState("");
  const [raca, setRaça] = useState("");
  const [placa, setIdade] = useState("");

  const handleSalvar = async () => {
    try {
      const response = await axios.post("https://zerissi.azurewebsites.net/pet/add", {
        nome: nome,
        raca: raca,
        placa: placa,
        funcionario: 2,
      });
      console.log(response);

      if (response.status === 201) {
        setModalVisible(true);
        setNome("");
        setRaça("");
        setIdade("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelar = () => {
    setNome("");
    setRaça("");
    setIdade("");
  };

  return (
    <Template imagem={"../../assets/images/bg-opaco.png"}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Entregador(a) cadastrado(a) com sucesso"
      />

      <View style={styles.tituloContainer}>
        <Text style={[styles.textPet, { fontSize: 60, fontWeight: "bold" }]}>
          Cadastro de Animais
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={styles.label}> Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View>
            <Text style={styles.label}>Raça</Text>
            <TextInput
              style={styles.input}
              value={raca}
              onChangeText={setRaça}
            />
          </View>
          <View>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={placa}
              onChangeText={setIdade}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={[styles.button, { marginRight: 10 }]}
              onPress={handleSalvar}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { backgroundColor: "#B20000" }]}
              onPress={handleCancelar}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/images/telaCadastroPet.png")}
            style={[styles.image, { width: 440, height: 440 }]}
            resizeMode="contain"
          />
        </View>
      </View>
    </Template>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    width: "80%",
  },
  button: {
    backgroundColor: "#0047AB",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textPet: {
    fontFamily: "Impact",
    color: "#0047AB",
  },
});

export default TelaCadastro;
