import {
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { primaryColor } from "../config/colors";
import { Input } from "../components/input";
import { useState } from "react";
import { PassInput } from "../components/passinput";
import { Botonn } from "../components/boton";
import { createUser } from "../apis/singup"; // Asegúrate de tener esta función en tu API
import { save } from "../utils/storage";

export default Singup = ({ navigation }) => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    //comprobar success, guardar el token, enviarme a la siguiente pantalla
    const Data = await createUser(dni, nombre, password);
    console.log("data TOKEN ------", Data.token);

    if (Data.success) {
      const result = await save("token", Data.token);
      console.log("nashe");
      navigation.navigate("Login");
    } else {
      setError(Data.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: Platform.OS === "android" && 30,
          backgroundColor: "skyblue",
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../../assets/fondo.jpg")}
          resizeMode="cover"
          style={{
            flex: 1,
            backgroundColor: "gray",
          }}
        >
          <View style={styles.logo}>
            <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: primaryColor,
              }}
              source={require("../../assets/logo.jpg")}
            />
            <Text style={{ fontSize: 35, color: "black", textAlign: "center" }}>
              Codiando como un campeón
            </Text>
          </View>
          <View style={styles.inputs}>
            <Input
              label="Ingrese su DNI"
              value={dni}
              onChange={setDni}
              icon="alien"
              type="numeric"
            />
            <Input
              label="Ingrese su nombre"
              value={nombre}
              onChange={setNombre}
              icon="account"
              type="default"
            />
            <PassInput
              label="Ingrese su contraseña"
              value={password}
              onChange={setPassword}
            />
            {error ? (
              <Text style={{ fontSize: 35, color: "red", textAlign: "center" }}>
                {error}
              </Text>
            ) : null}
            <Botonn title="Registrar" onPress={() => handleRegister()} />
            <Botonn
              title="Ir a Login"
              mode="outlined"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <View style={styles.olvide}>
            <Text>proximamente</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  texto: {},
  logo: {
    flex: 0.5,
    alignItems: "center",
    alignContent: "center",
    padding: 10,
  },
  inputs: {
    flex: 0.4,
    padding: 10,
    justifyContent: "center",
  },
  olvide: {
    flex: 0.1,
  },
});
