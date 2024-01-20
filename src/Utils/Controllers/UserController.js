const BASE_URL2 = "https://metriklass-api-dev-fgtq.4.us-1.fl0.io/";
const BASE_URL = "http://localhost:3001/";

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

  async DeleteUserByID(userID, successCallback) {
    try {
      const respuesta = await fetch(BASE_URL + `user/delete/${userID}`, {
        method: "DELETE",
      });
      if (!respuesta.ok) {
        throw Error(`Algo salió mal! ${respuesta.status}`);
      }
      successCallback();
    } catch (error) {
      throw new Error("Error en DeleteUserByID:", error);
    }
  }

  async getProjectImIn(userID) {
    try {
      const response = await fetch(BASE_URL + `projects/in/${userID}`);
      if (!response.ok) {
        alert("Error en la petición");
      }
      const project = await response.json();
      return project;
    } catch (error) {
      console.error("Error :", error);
      throw error;
    }
  }

  async updateUser(user_id, data) {
    try {
      const response = await fetch(BASE_URL + `user/update/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert("No se pudo actualizar el perfil");
      } else {
        alert("Actualizado");
      }
    } catch (error) {
      console.error("Error :", error);
      throw error;
    }
  }

  async getUserAdminLogin(data) {
    try {
      const response = await fetch(BASE_URL + "admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const serverRes = await response.json();
      if (!response.ok) {
        alert("No se pudo iniciar sesión, credenciales incorrectas");
        return { status: false, data: {} };
      }
      return { status: true, data: serverRes };
    } catch (error) {
      throw error;
    }
  }

  async getUserAdminStatus(user_id) {
    try {
      const response = await fetch(BASE_URL + `admin/status/${user_id}`);
      if (!response.ok) {
        alert("No se pudo obtener los datos");
      }
      const serverRes = await response.json();
      return serverRes;
    } catch (error) {
      throw error;
    }
  }

  async getAllUserAdmin() {
    try {
      const response = await fetch(BASE_URL + `admin`);
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos");
      }

      // Verifica si la respuesta es JSON antes de intentar convertirla
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const serverRes = await response.json();
        console.log("Contenido del arreglo:", serverRes);
        return serverRes;
      } else {
        throw new Error("La respuesta no es JSON");
      }
    } catch (error) {
      throw error;
    }
  }

  async updateUserPass(user_id, newPassword) {
    try {
      const response = await fetch(
        BASE_URL + `admin/update-user-pass/${user_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword: newPassword }),
        }
      );
      if (!response.ok) {
        alert("error actualizar contraseña");
      } else {
        alert("contraseña actualizada");
      }
    } catch (error) {
      throw error;
    }
  }
}
