import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Picker,
} from "react-native";
import {
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import Template from "../components/TemplatePrincipal";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CustomModal from "../components/CustomModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TelaHome = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOpcao, setSelectedPedidos] = useState([]);

  const [selectedPet, setSelectedPet] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedRemedio, setSelectedRemedio] = useState("");
  const [selectedDate, setSelectedDate] = useState("");


  
  // State for checkboxes
  const [checkDiario, setCheckDiario] = useState(false);
  const [checkMensal, setCheckMensal] = useState(false);
  const [checkDoseUnica, setCheckDoseUnica] = useState(false);

  useEffect(() => {
    const carregarPet = async () => {
      try {
        const response = await axios.get("https://zerissi.azurewebsites.net/pet");
        setPets(response.data);
        setCarregandoPets(false);
      } catch (error) {
        console.log(error);
      }
    };

    carregarPet();
  }, []);

  const handleAtribuicao = async () => {
    for (let i = 0; i < selectedOpcao.length; i++) {
      try {
        const response = await axios.put(
          `https://zerissi.azurewebsites.net/opcao/${selectedOpcao[i]}/atribuir-pet/${selectedPet}`
        );
      } catch (error) {
        setModalVisible(true);
        console.log(error);
      }
    }
    setModalVisible(true);
  };

  const handleCancelar = () => {
    setSelectedPedidos([]);
    setSelectedPet("");
    setSelectedPet("");
    setSelectedRemedio("");
    setSelectedPedido(""); // Reset selectedPedido on cancel

    // Reset checkboxes on cancel
    setCheckDiario(false);
    setCheckMensal(false);
    setCheckDoseUnica(false);
  };



  return (
    <Template imagem={"../../assets/images/bg-opaco.png"}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Pedido(s) atribuído(s) com sucesso"
      />
      <View style={styles.containerSecundario}>
        <View style={styles.tituloContainer}>
          <Text style={[styles.textPedido, { fontSize: 60 }]}>
            Atribuição
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <View>
              <Text style={styles.label}> Pet </Text>
              <Picker
                selectedValue={selectedPet}
                onValueChange={(itemValue) => setSelectedPet(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Selecione um pet" value="" />
                <Picker.Item label="Chefão" value="Chefão" />
                <Picker.Item label="Penélope" value="Penélope" />
                <Picker.Item label="Vanda" value="Vanda" />
              </Picker>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.label}>Remédio/Medicamento</Text>
              <Picker
                selectedValue={selectedRemedio}
                onValueChange={(itemValue) => setSelectedRemedio(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Selecione um remédio/medicamento" value="" />
                <Picker.Item label="PredVet" value="PredVet" />
                <Picker.Item label="Lexin" value="Lexin" />
                <Picker.Item label="Natuverm 660mg" value="Natuverm 660mg" />
              </Picker>

            </View>
            <View style={{ marginTop: 20 }}>

            <Text style={styles.label}>Horário</Text>
              <Picker
                selectedValue={selectedTime}
                onValueChange={(itemValue) => setSelectedTime(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Selecione um horário" value="" />
                <Picker.Item label="09:00" value="09:00" />
                <Picker.Item label="10:00" value="10:00" />
                <Picker.Item label="11:00" value="11:00" />
              </Picker>
            </View>


            {/* Data e Horário */}
              <Text style={styles.label}>Data</Text>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="datepicker"
                placeholderText="Selecione uma data"
                style={styles.datePicker} 
              />


            {/* Checkboxes for Diário, Mensal, Dose única */}
            <View style={styles.checkboxContainer}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkDiario}
                    onChange={() => setCheckDiario(!checkDiario)}
                    name="checkDiario"
                  />
                }
                label="Diário"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkMensal}
                    onChange={() => setCheckMensal(!checkMensal)}
                    name="checkMensal"
                  />
                }
                label="Mensal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkDoseUnica}
                    onChange={() => setCheckDoseUnica(!checkDoseUnica)}
                    name="checkDoseUnica"
                  />
                }
                label="Dose única"
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.button, { marginRight: 10 }]}
                onPress={handleAtribuicao}
              >
                <Text style={styles.buttonText}>Atribuir</Text>
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
              source={require("../../assets/images/telaAtribuicao.png")}
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
  textPedido: {
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
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  containerSecundario: {
    flex: 1,
    padding: 20,
  },
  tituloContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0047AB",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  checkboxContainer: {
    marginTop: 20,
  },
});

export default TelaHome;
