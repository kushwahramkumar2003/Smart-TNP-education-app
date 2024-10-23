import axios from 'axios';

export const CreateNewLiveClass = async (data:any) => {
  try {
    const response = await axios.post("http://localhost:8081/api/v1/start-meeting", data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
      console.log("Axios error:", error);

      if (error.response?.data) {
        throw new Error(error.response?.data.message);
      }
      throw new Error(error.message);
    }
    console.log("Unknown error:", error);
  }
};
