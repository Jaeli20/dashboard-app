const BASE_URL2 = "https://metriklass-api-dev-fgtq.4.us-1.fl0.io/";
const BASE_URL = "http://localhost:3001/";

export default class LogController {
  async getLog() {
    try {
      const response = await fetch(BASE_URL + "log");
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(responseJson.message || "Error");
      }

      return responseJson;
    } catch (error) {
      throw error;
    }
  }
}
