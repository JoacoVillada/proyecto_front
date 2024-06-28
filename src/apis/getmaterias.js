import { materias } from "../config/urlapis";

export const obtenerMaterias = async (token) => {
  console.log("TOKENTOKEN :::", token);
  const res = await fetch(materias, {
    method: "GET",
    headers: {
      auth: token,
    },
  });

  return await res.json();
};
