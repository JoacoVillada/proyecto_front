// ../apis/register.js
import { singup } from "../config/urlapis";

export const createUser = async (dni, nombre, password) => {
  try {
    const response = await fetch(singup, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dni,
        nombre,
        password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    return { success: false, message: "Error al crear el usuario" };
  }
};
