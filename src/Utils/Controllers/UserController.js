const BASE_URL = "https://metriklass-api-dev-fgtq.4.us-1.fl0.io/";

export default class UserController {
  async createUser(data) {
    try {
      const response = await fetch(BASE_URL + "user/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const newProject = await response.json();

      if (!response.ok) {
        alert("Error al crear usuario");
        return false;
      } else {
        console.log("Usuario creado");
        return true;
      }
    } catch (error) {
      console.error("Error en createUser:", error);
      throw error;
    }
  }
}
