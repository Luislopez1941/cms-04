// APIConfiguration.ts
import axiosInstance from './APIConfiguration'; // Asegúrate de que esta ruta es correcta

export const apiAlgorithms = () => {
  return axiosInstance.get('/users');
};

export const sumNumbersStop = async (data) => {
  const response = await axiosInstance.post('/administrator_customer_registration', data);
  return response;
};

