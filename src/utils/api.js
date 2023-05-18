import { endpoints } from "./endpoints";

export async function getApiData(apiEndpoint) {
    try {
      const response = await fetch(endpoints.baseUrl+apiEndpoint);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      // Handle error cases, such as returning an error object or throwing an exception
      // based on your specific use case.
      // For simplicity, this example just rethrows the error.
      throw error;
    }
  
};
  