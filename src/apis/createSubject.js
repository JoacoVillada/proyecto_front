import { createMateria } from "../config/urlapis";
import { getValueFor } from "../utils/storage"; // Asegúrate de importar la función de obtención del token

export const create_materia = async (nombre_materia) => {
  try {
    const response = await fetch(createMateria, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre_materia }),
    });

    console.log("Código de estado HTTP:", response.status);

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al crear la materia:", error);
    throw error;
  }
};
