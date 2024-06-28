import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { create_materia } from "../apis/createSubject";

const CrearMateria = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [message, setMessage] = useState();

  const handleCrearMateria = async () => {
    try {
      const data = await create_materia(nombre);
      if (data.success) {
        setMessage("Materia Creada Con Exito");
        //navigation.navigate("tabs");
      } else {
        setMessage("No se pudo crear la materia");
        Alert.alert("Error", "No se pudo crear la materia");
      }
    } catch (error) {
      console.error("Error al crear la materia:", error);
      setMessage("Error al crear materia");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        {message ? (
          <Text style={{ fontSize: 35, color: "red", textAlign: "center" }}>
            {message}
          </Text>
        ) : null}
        <Text style={styles.label}>Nombre de la Materia</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <Button title="Crear Materia" onPress={handleCrearMateria} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  form: {
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default CrearMateria;
