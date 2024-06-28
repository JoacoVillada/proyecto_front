import { login } from "../config/urlapis";

export const loginCheck = async (dni, password) => {
  // Comprobación de la entrada
  console.log("DNI:", dni, "Password:", password);

  // Petición a la URL
  const res = await fetch(login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dni, password }),
  });

  // Devolver la respuesta del servidor
  const jsonResponse = await res.json();
  console.log("Respuesta del servidor:", jsonResponse);
  return jsonResponse;
};
