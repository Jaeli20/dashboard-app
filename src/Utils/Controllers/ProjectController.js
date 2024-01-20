const BASE_URL2 = "https://metriklass-api-dev-fgtq.4.us-1.fl0.io/";
const BASE_URL = "http://localhost:3001/";

export default class ProjectController {
  async getProjectKPIFromID(user_id) {
    try {
      const response = await fetch(BASE_URL + `projects/kpi/${user_id}`); // Añade await para esperar la promesa

      if (!response.ok) {
        // Manejar casos donde la respuesta no es exitosa
        //throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw error;
    }
  }
}
