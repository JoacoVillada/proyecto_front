import * as SecureStore from "expo-secure-store";

// Guardar un valor
export const save = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (error) {
    console.log("error en el save: ", error);
    return false;
  }
};

// Obtener un valor
export const getValueFor = async (key) => {
  try {
    let result = await SecureStore.getItemAsync(key);
    return result;
  } catch (error) {
    console.log("error en el getValueFor: ", error);
    return false;
  }
};
