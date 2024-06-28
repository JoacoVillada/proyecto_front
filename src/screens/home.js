import { useEffect, useState, ImageBackground } from "react";
import { FlatList, Text, View } from "react-native";
import { getValueFor } from "../utils/storage";
import { obtenerMaterias } from "../apis/getmaterias";
import { Card } from "../components/cards";

export default Home = () => {
  const [token, setToken] = useState();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const tok = async () => {
      const tk = await getValueFor("token");
      console.log("tk ", tk);
      setToken(tk);
    };

    const getMaterias = async () => {
      const data = await obtenerMaterias(token);
      console.log("REspuesta materias: ", data);
      setMaterias(data);
      console.log("materias: ", data);
    };

    tok();
    getMaterias();
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Text>Lista de materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => <Card nombre={item.nombre} />}
      />
    </View>
  );
};
