const BASE_URL2 = "https://metriklass-api-dev-fgtq.4.us-1.fl0.io/";
const BASE_URL = "http://localhost:3001/";

export default class AdminUserController {
  async updateActiveStatus(user_id, newState, successCallback) {
    try {
      const response = await fetch(BASE_URL + `admin/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ active: newState }),
      });

      if (!response.ok) {
        alert(" algo salio mal");
      }

      alert(" usuario actualizado");
      successCallback();
    } catch (error) {
      throw error;
    }
  }
  async deleteUserAdminByID(user_id, onSuccessCallback) {
    try {
      const response = await fetch(BASE_URL + `admin/delete/${user_id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        alert("error al eliminar usuario");
      }
      onSuccessCallback();
    } catch (error) {
      throw error;
    }
  }
  async updateInfo(user_id, email, name, successCallback) {
    try {
      const response = await fetch(BASE_URL + `admin/update/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, name: name }),
      });

      if (!response.ok) {
        response.status === 401
          ? alert("correo ya registrado")
          : alert(` algo salio mal al actualizar el usuario `);
        return;
      }

      alert(" usuario actualizado");
      successCallback();
    } catch (error) {
      throw error;
    }
  }

  async createAdminUser(data, onSuccessCallback) {
    try {
      const response = await fetch(BASE_URL + "admin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        alert("error al crear usuario");
      }
      onSuccessCallback();
    } catch (error) {
      throw error;
    }
  }

  async updateAdminPassword(user_id, newPassword) {
    try {
      const response = await fetch(
        BASE_URL + `admin/update-admin-pass/${user_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword: newPassword }),
        }
      );
      if (!response.ok) {
        alert(`error actualizar contraseña ${user_id}`);
      } else {
        alert("contraseña actualizada");
      }
    } catch (error) {
      throw error;
    }
  }
}
