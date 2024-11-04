import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
} from "react-native";
import {
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import Template from "../components/TemplatePrincipal";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CustomModal from "../components/CustomModal";

const TelaVisualizacao = () => {
  const navigation = useNavigation();

  const [selectedPet, setSelectedPet] = useState("");
  
  // Estado para armazenar a descrição do remédio selecionado
  const [remedioInfo, setRemedioInfo] = useState("");
  const [checked, setChecked] = useState(false); // Estado para o checkbox

  // Valores padrão para pets e medicamentos
  const [pets, setPets] = useState([
    { id: "1", nome: "Chefão" },
    { id: "2", nome: "Penélope" },
    { id: "3", nome: "Vanda" },
  ]);

  const [medicamentos, setMedicamentos] = useState([
    { id: "1", descricao: "PredVet" },
    { id: "2", descricao: "Medicamento 2" },
    { id: "3", descricao: "Medicamento 3" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);



  const buscarMedicamento = (medicamentoId) => {
    const medicamentoEncontrado = medicamentos.find((medicamento) => medicamento.id == medicamentoId);
    return medicamentoEncontrado;
  };


  const handleSelectedPetChange = (itemValue) => {
    setSelectedPet(itemValue);
    const remédioSelecionado = buscarMedicamento(itemValue);
    if (remédioSelecionado) {
      setRemedioInfo(`Remédio: ${remédioSelecionado.descricao}, Horário: 9 horas, Data: Diário`);
    } else {
      setRemedioInfo("");
    }
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Template imagem={"../../assets/images/bg-opaco.png"}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Medicamento(s) atribuído(s) com sucesso"
      />
      {/* Conteúdo do medicamento */}
      <View style={styles.containerSecundario}>
        <View style={styles.tituloContainer}>
          <Text style={[styles.textMedicamento, { fontSize: 60 }]}>Visualização</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <View>
              <Text style={styles.label}>Verificar Remédio/Medicamento a ser ministrado</Text>
              <Picker
                selectedValue={selectedPet}
                onValueChange={handleSelectedPetChange}
                style={styles.input}
              >
                <Picker.Item label="Selecione um pet" value="" />
                {pets.map((pet) => (
                  <Picker.Item key={pet.id} label={pet.nome} value={pet.id} />
                ))}
              </Picker>
              {remedioInfo !== "" && (
                <View style={styles.remedioContainer}>
                  <Text style={styles.remedioText}>{remedioInfo}</Text>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                        name="checkRemedio"
                        color="primary"
                      />
                    }
                    label="Ministrado"
                  />
                </View>
              )}
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../assets/images/telavisualizacao.png")}
              style={[styles.image, { width: 440, height: 440 }]}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </Template>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 100,
  },
  textMedicamento: {
    fontWeight: "bold",
    color: "#0047AB",
    textAlign: "center",
    fontFamily: "Impact",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 5,
    width: "80%",
  },
  remedioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  remedioText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0047AB",
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
  posicaoImage: {
    marginLeft: 20,
  },
  menuSuperior: {
    flexDirection: "row",
    justifyContent: "center", // Centralizando os botões
    alignItems: "center",
    marginTop: 20,
  },
  menuButton: {
    backgroundColor: "#015500",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  menuButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centralizando os elementos dentro do container do título
    marginBottom: 20,
  },
});

export default TelaVisualizacao;
