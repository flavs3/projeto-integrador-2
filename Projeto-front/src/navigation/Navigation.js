import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaHome from "../telas/TelaHome";
import TelaAtribuicao from "../telas/TelaAtribuicao";
import TelaCadastro from "../telas/TelaCadastro";
import TelaVisualizacao from "../telas/TelaVisualizacao";
import TelaMedicamento from "../telas/TelaMedicamento";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaHome">
          <Stack.Screen
            name="TelaHome"
            component={TelaHome}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TelaVisualizacao"
            component={TelaVisualizacao}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TelaMedicamento"
            component={TelaMedicamento}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TelaAtribuicao"
            component={TelaAtribuicao}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TelaCadastro"
            component={TelaCadastro}
            options={{ headerShown: false }}
          />
    
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
